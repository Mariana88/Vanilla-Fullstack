        window.onload = function() {
            api_connection.initialize("http://localhost:3001");
            api_connection.get(['all']);
            let newNoteBtn = document.getElementById('newNote');
            newNote.addEventListener('click', handler.createNote);
            
        }