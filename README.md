<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
 -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/wchtommy20013/json-puller">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">JSON Puller</h3>

  <p align="center">
    A simple script to fetch remote endpoints and store the response in local json files.
    <!-- <br />
    <a href="https://github.com/wchtommy20013/json-puller"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/wchtommy20013/json-puller">View Demo</a>
    ·
    <a href="https://github.com/wchtommy20013/json-puller/issues">Report Bug</a>
    ·
    <a href="https://github.com/wchtommy20013/json-puller/issues">Request Feature</a>
  </p> -->
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
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

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* pnpm
  ```sh
  npm install pnpm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/wchtommy20013/json-puller.git
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```
3. Copy environment
   ```sh
   cp .env.example .env
   ```
4. Run the demo script
   ```sh
   pnpm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

1. Configuration `.env`
  ```sh
  OUTPUT_DIR=./data               # Local Directory to output response json
  USE_REMOTE_CONFIG=0             # Fetch instead of readFile from CONFIG_FILE_PATH if USE_REMOTE_CONFIG=1
  CONFIG_RELOAD=0                 # Reload configuration file before every fetch if CONFIG_RELOAD=1
  CONFIG_FILE_PATH=./config.toml  # Path to configuration file, use a remote endpoint if USE_REMOTE_CONFIG=1
  ```
2. Configure `config.toml`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/wchtommy20013/json-puller/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
<!-- 
## Contact
Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/wchtommy20013/json-puller](https://github.com/wchtommy20013/json-puller)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []() 

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/wchtommy20013/json-puller.svg?style=for-the-badge
[contributors-url]: https://github.com/wchtommy20013/json-puller/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/wchtommy20013/json-puller.svg?style=for-the-badge
[forks-url]: https://github.com/wchtommy20013/json-puller/network/members
[stars-shield]: https://img.shields.io/github/stars/wchtommy20013/json-puller.svg?style=for-the-badge
[stars-url]: https://github.com/wchtommy20013/json-puller/stargazers
[issues-shield]: https://img.shields.io/github/issues/wchtommy20013/json-puller.svg?style=for-the-badge
[issues-url]: https://github.com/wchtommy20013/json-puller/issues
[license-shield]: https://img.shields.io/github/license/wchtommy20013/json-puller.svg?style=for-the-badge
[license-url]: https://github.com/wchtommy20013/json-puller/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
