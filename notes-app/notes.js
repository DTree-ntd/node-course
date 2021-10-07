const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNote();
    const dupicateNote = notes.find((note) =>  note.title === title);
    
    if (!dupicateNote) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }; 
};

const removeNote = (title) => {
    const notes = loadNote();
    const noteToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > noteToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(noteToKeep);
    } else {
        console.log(chalk.red.inverse('No note founded!'));
    }
};

const listNotes = () => {
    const notes = loadNote();
    console.log(chalk.green.inverse('Notes listed!'));
    console.log(notes);
};

const readNote = (title) => {
    const notes = loadNote();
    const note = notes.find((note) =>  note.title === title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('No note founded!'));
    }; 
    
};
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    };
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};