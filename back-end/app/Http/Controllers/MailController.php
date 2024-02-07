<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\SendMail;
use App\Models\ContactForm;

class MailController extends Controller
{
    public function index(Request $request)
    {

        $formData = $request->validate([
            'subject' => 'required',
            'email' => 'required|email',
            'message' => 'required',
            'firstname' => 'nullable', 
            'lastname' => 'nullable',  
            'enterpriseName' => 'nullable',
        ]);

        $contact = new ContactForm($formData);
        $contact->save();

        $mailData = [
            'title' => $formData['subject'],
            'body' => $formData['message'],
        ];
        if (isset($formData['firstname'])) {
            $mailData['firstname'] = $formData['firstname'];
        }
    
        if (isset($formData['lastname'])) {
            $mailData['lastname'] = $formData['lastname'];
        }
        if (isset($formData['enterpriseName'])) {
            $mailData['enterpriseName'] = $formData['enterpriseName'];
        }
https://blog.logrocket.com/implement-recaptcha-react-application/
        Mail::to('gayraud854@gmail.com')->send(new SendMail($mailData, $formData));
        dd('le mail a bien ete envoyé');
    }
}
