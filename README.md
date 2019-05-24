Deploy:

'''
npm install
npm start
'''

Caso não funcione, rode o concurrently na mão:

'''
node_modules/concurrently/bin/concurrently.js "npm run dev" "electron ."
'''
