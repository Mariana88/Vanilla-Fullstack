const view = {
    createNote: function(){
            let container = document.getElementById('containerNewNote')
            let noteField = document.createElement('input')
            noteField.setAttribute('type','text');
            noteField.setAttribute('id','newNoteField');
            noteField.setAttribute('placeholder','Enter new note here');
            let saveBtn = document.createElement('button');
            saveBtn.setAttribute('id', 'save');
            saveBtn.setAttribute('type', 'button');
            saveBtn.innerHTML = "Save";
            container.appendChild(noteField);
            container.appendChild(saveBtn);
            saveBtn.addEventListener('click',handler.saveNote);
    }
}
