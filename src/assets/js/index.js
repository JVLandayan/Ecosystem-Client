const scriptURL = 'https://script.google.com/macros/s/AKfycbw88N89TdUE42-fi6Wd0WTKxFz-nyVWG9AtOXTlS8VQMZbB3Bmt/exec'
            const form = document.forms['google-sheet']

            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => alert("Submission was received", response))
                .catch(error => console.error('Error!', error.message))
            })
            console.log(FormData)
