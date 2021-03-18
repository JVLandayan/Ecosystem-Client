const scriptURL = 'https://script.google.com/macros/s/AKfycbxJF3xtDeVf_uwnz_8hrU6eU76FFFMO1MbOvXF_GJQJgc5_e2o/exec'
            const form = document.forms['google-sheet']

            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => alert("Submission was received", response))
                .catch(error => console.error('Error!', error.message))
            })
            console.log(FormData)
