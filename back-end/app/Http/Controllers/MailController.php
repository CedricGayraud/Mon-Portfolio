<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\SendMail;
use App\Models\ContactForm;
use Illuminate\Support\Facades\Log;

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

        Mail::to('gayraud854@gmail.com')->send(new SendMail($mailData, $formData));

        return response()->json(['message' => 'Mail envoyé avec succès'], 200);

        // $email = $request->email;

        // try {
        //     Mail::to('gayraud854@gmail.com')->send(new SendMail($mailData, $formData));
        //     dd('le mail a bien été envoyé');
        //     Log::info('Le mail a bien été envoyé');
        // } catch (\Exception $e) {
        //     Log::error('Erreur lors de l\'envoi du mail: ' . $e->getMessage());            
        // }
        // $senderMessage = "thanks for your message , we will reply you in later";
        // Mail::to( $email)->send(new SendMessageToEndUser($senderMessage));
        // return "Mail Send Successfully";
    }
}
