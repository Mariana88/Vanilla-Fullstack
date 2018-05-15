const handler = {
    displayNotes: function(allNotes){
        let myNotes = document.getElementById('myNotes');
        //let myNotes = document.getElementById('myNotes').getElementsByTagName('tbody');
        let i;
        for (i in allNotes){
            let noteRow = document.createElement('tr');
            myNotes.appendChild(noteRow);
            let note = document.createElement('td');
            note.innerHTML = allNotes[i];
            noteRow.appendChild(note);
            let editBtnCell = document.createElement('td');
            let editBtn = document.createElement('button');
            editBtn.setAttribute('id', 'eBTN-' + i);
            editBtn.setAttribute('type', 'button');
            editBtn.innerHTML = "Edit";
            editBtnCell.appendChild(editBtn);
            noteRow.appendChild(editBtnCell);
            let deleteBtnCell = document.createElement('td');
            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('id', 'dBTN-' + i);
            deleteBtn.setAttribute('type', 'button');
            deleteBtn.innerHTML = "Delete";
            deleteBtnCell.appendChild(deleteBtn);
            noteRow.appendChild(deleteBtnCell); 
        }
    },
    createNote: function(){
        view.createNote();
    },
    saveNote: function(){
        let newNote = document.getElementById('newNoteField').value;
        api_connection.get(["add", newNote]);
        api_connection.get(['all']);
    },

    editNote: function(){

    },
    deleteNote: function(){

    }
}