require('dotenv').config()
const fs = require('fs');
const toml = require('toml');
const axios = require('axios');

const env = {
    outputDir: process.env.OUTPUT_DIR ?? './data',
    configFile: process.env.CONFIG_FILE_PATH ?? './config.toml',
    shouldUseRemoteConfig: Boolean(process.env.USE_REMOTE_CONFIG === '1'),
    shouldReloadConfig: Boolean(process.env.CONFIG_RELOAD === '1'),
};

let configFileContent = null;
let config = null;

async function loadConfig() {
    const updatedConfigFileContent = env.shouldUseRemoteConfig ? await axios(env.configFile).then(x => x.text()) : fs.readFileSync(env.configFile);
    if (configFileContent === null || configFileContent.toString() !== updatedConfigFileContent.toString()) {
        configFileContent = updatedConfigFileContent;
        config = toml.parse(configFileContent);
        console.log('Start JSON puller with the following configuration:');
        console.log('--------------------------------------------------');
        console.log(configFileContent.toString());
        console.log('--------------------------------------------------');
    }
}

async function main() {
    if (config === null || env.shouldReloadConfig) {
        await loadConfig();
    }
    const promises = Object.keys(config).map(async (key) => {
        if (key.startsWith("__")) {
            return null;
        }
        const query = config[key].query ? Object.keys(config[key].query).map(prop => `${prop}=${config[key].query[prop]}`).join('&') : '';
        const url = `${config.__config.base_url}${config[key].endpoint ?? `/${key}`}?${query}`;
        console.log('Fetch', url);
        const headers = (config.__config.bearer_token) ? {
            "Authorization": `Bearer ${config.__config.bearer_token}`
        } : {};
        try {
            const data = await axios(url, { headers }).then(x => x.data);
            fs.writeFileSync(`${env.outputDir}/${key}.json`, JSON.stringify(data));
            return data;
        } catch (e) {
            console.error(e);
        }
    });
    await Promise.all(promises);
    setTimeout(main, config.__config.interval * 1000);
}

main();