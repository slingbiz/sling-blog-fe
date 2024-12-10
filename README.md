
<div align="center">
  <h1>Create Sling App</h1>
</div>

<div align="center">
  <img src="https://sling.biz/assets/images/sling_biz_sling_image.jpg"/>
</div>

<p align="center">
  <strong>
    <a href="https://studio.sling.biz">🚀 Live Demo</a>
  </strong>
</p>

Open source drag and drop frontend CMS in NextJs. Completely customizable Pages, Templates & Widgets written in NextJs. Sling is an Open Source alternative to Builder.io.

## ✨ Features :fire:

- **It's just React & NodeJs**
- **Control how your components are edited**: With Sling.biz, you control the React widgets and their props from the Studio directly.

## 🛠️ Prerequisites

To properly set up Sling, you need:

- **MongoDB URI**: Make sure you have a MongoDB instance running and obtain its URI.
- **Node.js**: Ensure you have Node.js version 18 or greater installed.

## 🚀 Setting up Sling - Hosted Studio

To set up a Sling project locally using [Hosted Studio](https://studio.sling.biz/), follow these steps:

### Frontend App Setup

1. **Use the Installer**:
   - Create the Sling Frontend app by running the following command:
     ```sh
     yarn create sling-app my-project
     ```
   - Follow the prompts to configure your Sling app.

      

2. **Obtain Sling Studio Keys**

    
   - Visit [Sling Studio](https://studio.sling.biz/) to sign up to create an account.
   - Complete the company setup.
   - Navigate to your account settings or profile section.
   - Locate the section for accessing or generating Sling Studio Keys.
   - Copy the keys provided and update them in the `.env` file for the frontend app.
   - **Voilà!** You can now access your app at [http://localhost:4087](http://localhost:4087).
! 

3. **Play around**

   1. Access  [Sling Studio](https://studio.sling.biz/) .
   2. **Create custom widgets** and use them in your page templates.
   3. **Modify content from Studio** and view the changes in your pages.


## 🌐 Setting up Sling - Self Hosted Studio

If you prefer to host Sling Studio on your local machine, follow these instructions. Sling consists of three main parts: Sling Studio, Sling API, and Sling FE.

1. **Run the Installer**:
   - Use the installer to set up the Sling project by running the following command:
     ```sh
     yarn create sling-app my-project
     ```

2. **Follow the prompts to configure your Sling app** by picking self hosted option. The starter script will start the services in the background but you can close it and start on your own.


3. **Open your browser and navigate to**:
   - Frontend: `http://localhost:4087`
   - Studio: `http://localhost:2021`
   - API: `http://localhost:10001`


## 📚 Docs

- [Website](https://sling.biz)
- [Documentation](https://sling.biz/documentation/)
- [Demo](https://studio.sling.biz)



## 🙋 Getting Help :wave:

If you have any questions or something you'd like to discuss (e.g., contributing or queries), please head over to our [Slack](https://slingbiz.slack.com/archives/C06KE4ZMSQP) channel.

Alternatively, you can raise a [GitHub issue](https://github.com/slingbiz/sling-fe/issues), or reach out directly to the author via [Email](mailto:ankur@sling.biz) or [LinkedIn](https://www.linkedin.com/in/ankurpata/).
