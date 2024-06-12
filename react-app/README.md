# Getting Started

Retrieve Cloud Manager credentials for local web app development. Before you can run the SecurBank app, you will need Cloud Manager credentials to connect the app to Cloud Manager.

1. **Access Developer Console:**
   - From the Overview tab in Cloud Manager, tap or click the ellipsis button next to the environment name and select **Developer Console**.

2. **Generate Local Development Token:**
   - In the Developer Console, select the **Integrations** tab then the **Local Token** tab and tap or click **Get Local Development Token**.
   - A JSON file is produced with the access token. Copy only the token itself (the remaining JSON is not necessary) to a secure location for use in a future step before closing the Developer Console and returning to Cloud Manager.

3. **Copy Environment URL:**
   - Back in Cloud Manager, on the Overview tab, right-click the URL of the environment to copy it and save it in a secure location for use in a future step.

4. **Update .env.local File:**
   - Make the following changes to a copy of the `.env` file named `.env.local` and save the changes:
     - For `REACT_APP_HOST_URI`, paste the value of the previously copied URL of your environment.
     - For `REACT_APP_DEV_TOKEN`, paste the value of the previously copied local development token.

5. **Run the SecurBank Web App:**
   - With everything set up both in Cloud Manager and locally, you can run the SecurBank web app.
   - At the command line of your local machine, navigate to the `react-app` folder of the SecurBank app project you downloaded and decompressed.
   - In your `react-app` folder, install the SecurBank app with the `npm -i` command.
   - Once installed, start the SecurBank app with the `npm start` command.
