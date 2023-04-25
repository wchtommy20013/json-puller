require('dotenv').config()
const fs = require('fs');
const toml = require('toml');

async function main() {
    const configFileContent = (Boolean(process.env.USE_REMOTE_CONFIG !== '0')) ? await fetch(process.env.CONFIG_FILE_PATH).then(x => x.text()) : fs.readFileSync(process.env.CONFIG_FILE_PATH);
    const config = toml.parse(configFileContent);

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
            const data = await fetch(url, { headers }).then(x => x.json());
            fs.writeFileSync(`${process.env.LOCAL_DIRECTORY}/${key}.json`, JSON.stringify(data));
            return data;
        } catch (e) {
            console.error(e);
        }
    });
    await Promise.all(promises);
}

main();