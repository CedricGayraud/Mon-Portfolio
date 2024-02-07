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
    @if(isset($mailData['firstname']))
    <p>
        Message de : {{ $mailData['firstname'] }} {{ $mailData['lastname'] }}
    </p>
@endif

    @if(isset($mailData['enterpriseName']))
        <p>Message de l'entreprise : {{ $mailData['enterpriseName'] }}</p>
    @endif
    <p>Message :{{ $mailData['body'] }}</p>
</body>
</html>