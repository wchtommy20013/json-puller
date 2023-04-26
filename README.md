<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/wchtommy20013/json-puller">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">JSON Puller</h3>

  <p align="center">
    A simple script to fetch remote endpoints and store the response in local json files.
    <br />
    <a href="https://github.com/wchtommy20013/json-puller"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/wchtommy20013/json-puller">View Demo</a>
    ·
    <a href="https://github.com/wchtommy20013/json-puller/issues">Report Bug</a>
    ·
    <a href="https://github.com/wchtommy20013/json-puller/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a simple script to fetch remote endpoint and store the response to a local json file, which can then be used by other services through i.e. Docker volume

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/wchtommy20013/json-puller.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Copy environment
   ```sh
   cp .env.example .env
   ```
4. Run the demo script
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Configuration `.env`
  ```sh
  OUTPUT_DIR=./data               # Local Directory to output response json
  USE_REMOTE_CONFIG=0             # Fetch instead of readFile from CONFIG_FILE_PATH if USE_REMOTE_CONFIG=1
  CONFIG_RELOAD=0                 # Reload configuration file before every fetch if CONFIG_RELOAD=1
  CONFIG_FILE_PATH=./config.toml  # Path to configuration file, use a remote endpoint if USE_REMOTE_CONFIG=1
  ```
2. Configure `config.toml`
  ```toml
# Example (Credit to https://dummyjson.com/)

# General Configs
[__config]
base_url = "https://dummyjson.com" 
bearer_token = ""
interval = 300 # in seconds

# A table defines a new fetch action, response will save to {table name}.json
# This fetches /products/search?q=Laptop and save response to `laptops.json`
[laptops]
endpoint = "/products/search"
query = { q = 'Laptop' }

# This fetches /products and save response to `products.json`
[products]
  ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->

## Contact
Tommy Wong - wchtommy20013+jsonpuller@gmail.com

Project Link: [https://github.com/wchtommy20013/json-puller](https://github.com/wchtommy20013/json-puller)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
