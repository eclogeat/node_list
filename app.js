const fs = require('fs')
const [command, title,content] = process.argv.slice(2)

switch (command) {
    case 'list':
        list();
        break;
    case 'view':
        view(title);
        break;
    case 'create':
        create(title, content);
        break;
    case 'remove':
        remove(title);
        break;
    default: console.log('Неизвестная команда');
 }

 function create(title,content) {
    const notes = {title,content}
    const json = JSON.stringify(notes)
    fs.writeFile('notes.json', json, (error) => {
        if (error) return console.error(error.message)
        console.log('note create')
    })
 }