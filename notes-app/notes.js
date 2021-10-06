const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {

};

const addNote = (title, body) => {
    const notes = loadNote();
    const dupicateNotes = notes.filter((note) => {
        return note.title === title
    });
    
    if (dupicateNotes.length === 0) {
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
    const noteToKeep = notes.filter((note) => {
        return note.title !== title;
    });

    if (notes.length > noteToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(noteToKeep);
    } else {
        console.log(chalk.red.inverse('No note founded!'));
    }
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};