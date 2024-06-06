# Interactive Skill Assessment Tool

#### MERN Stack + typescript based app to utilize your skills and showcase your talent

## Installation

You can run this app for testing and devlopment by running the following in your terminal

Make sure you have Nodejs install and version above v18.17.0

```bash
git clone https://github.com/ptech12/skillz-mern
```

change to project directory and install dependencies

```bash
cd skillz-mern
```
Run the following to install dependencies for both client & backend
```bash
npm run installc && npm run installb
```

Create the Environment Variable file and update the contents

```bash
touch .env
```

Open the .env in a editor and add the backend-server URL
```bash
VITE_API_URL=
```
Start the client 

```bash
cd client && npm run dev
```
Start the server in new terminal 

```bash
cd backend && npm run dev
```