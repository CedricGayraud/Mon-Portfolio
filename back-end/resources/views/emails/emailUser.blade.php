<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
    <section style="max-width: 36rem; margin-left: auto; margin-right: auto; padding: 1.5rem; background-color: #fff; color: #333; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        <header style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
            <a href="#">
                <img style="width: auto; height: 1.75rem; margin-bottom: 0.125rem;" src="https://merakiui.com/images/full-logo.svg" alt="">
            </a>
        </header>
    
        <main style="margin-top: 1.5rem;">
            @if(isset($mailData['firstname']))
            <h2 style="color: #4a5568;">
                Bonjour {{ $mailData['firstname'] }},
            </h2>
            @endif
            
            @if(isset($mailData['enterpriseName']))
            <p>Bonjour,</p>
            @endif
            <p style="margin-top: 0.5rem; line-height: 1.75; color: #4b5563;">
               Votre message à bien été envoyé, je vous recontacterai dans les plus brefs délais.
            </p>
            <div style="display: flex;">
            <p style="margin-top: 0.5rem; line-height: 1.75; color: #4b5563;">
                Je suis également disponible par téléphone au :
             </p>
             <p style="margin-top: 0.5rem; line-height: 1.75; color: #4b5563; font-weight:600;"> 07 84 81 29 38</p>
            </div>
            <p style="margin-top: 0.5rem; color: #4b5563;">
                Merci, <br>
                Cédric Gayraud
            </p>
            
        </main>
    
        <footer style="margin-top: 1.5rem; color: #4b5563;">
            <p>
                Cet email est automatique et à été envoyé à <a href="#" style="color: #2563eb; text-decoration: none;">{{ $mailData['email'] }}</a>. 
                If you'd rather not receive this kind of email, you can <a href="#" style="color: #2563eb; text-decoration: none;">unsubscribe</a> or <a href="#" style="color: #2563eb; text-decoration: none;">manage your email preferences</a>.
            </p>
    
        </footer>
    </section>
</body>
</html>