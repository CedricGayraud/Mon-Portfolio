<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    {{-- <h1>{{ $mailData['title'] }}</h1> --}}
    <p style="color: #cc1d1d; font-size: 26px;">Hello, this is a styled paragraph.</p>
    @if(isset($mailData['firstname']))
    <p>
        Message de : {{ $mailData['firstname'] }} {{ $mailData['lastname'] }}
    </p>
    @endif

    @if(isset($mailData['enterpriseName']))
    <p>Message de l'entreprise : {{ $mailData['enterpriseName'] }}</p>
    @endif
    <p>Message :{{ $mailData['body'] }}</p>
    <section style="max-width: 36rem; margin-left: auto; margin-right: auto; padding: 1.5rem; background-color: #fff; color: #333; border-radius: 0.375rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        <header style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
            <a href="#">
                <img style="width: auto; height: 1.75rem; margin-bottom: 0.125rem;" src="https://merakiui.com/images/full-logo.svg" alt="">
            </a>
            
            <nav style="display: flex; gap: 1.5rem;">
                <a href="#" style="font-size: 0.875rem; color: #4b5563; transition: color 0.3s ease-in-out; text-decoration: none;">Home</a>            
                <a href="#" style="font-size: 0.875rem; color: #4b5563; transition: color 0.3s ease-in-out; text-decoration: none;">Blog</a>        
                <a href="#" style="font-size: 0.875rem; color: #4b5563; transition: color 0.3s ease-in-out; text-decoration: none;">Tutorials</a>
                <a href="#" style="font-size: 0.875rem; color: #4b5563; transition: color 0.3s ease-in-out; text-decoration: none;">Support</a>
            </nav>
        </header>
    
        <main style="margin-top: 1.5rem;">
            <h2 style="color: #4a5568;">Hi Olivia,</h2>
    
            <p style="margin-top: 0.5rem; line-height: 1.75; color: #4b5563;">
                We’re glad to have you onboard! You’re already on your way to 
                creating beautiful visual products.
                Whether you’re here for your brand, for a cause, or just for fun — 
                welcome! If there’s anything you need, we’ll be here every step of the way.
            </p>
            
            <p style="margin-top: 0.5rem; color: #4b5563;">
                Thanks, <br>
                Meraki UI team
            </p>
            
            <button style="padding: 0.5rem 1.5rem; margin-top: 1rem; font-size: 0.875rem; font-weight: 500; line-height: 1.25; text-align: center; text-transform: uppercase; color: #fff; background-color: #2563eb; border: 1px solid transparent; border-radius: 0.375rem; cursor: pointer; transition: background-color 0.3s ease-in-out;">
                Login
            </button>
        </main>
    
        <footer style="margin-top: 1.5rem; color: #4b5563;">
            <p>
                This email was sent to <a href="#" style="color: #2563eb; text-decoration: none;">contact@merakiui.com</a>. 
                If you'd rather not receive this kind of email, you can <a href="#" style="color: #2563eb; text-decoration: none;">unsubscribe</a> or <a href="#" style="color: #2563eb; text-decoration: none;">manage your email preferences</a>.
            </p>
    
            <p style="margin-top: 0.75rem;">© <script>document.write(new Date().getFullYear())</script> Meraki UI. All Rights Reserved.</p>
        </footer>
    </section>
</body>
</html>
