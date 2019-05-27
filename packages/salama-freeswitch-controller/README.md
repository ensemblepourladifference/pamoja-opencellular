# Salama Freeswitch Controller

Freeswitch Event Socket controller module for Salama Emergency Service

Save translated sound files in the companion freeswitch package [lang](https://github.com/ensemblepourladifference/pamoja-opencellular/tree/master/packages/freeswitch/build/lang) folder:

**Salama Script**

An emergency service to notify pre designated contacts of your location and details of what is happening.

**Salama User**

<span style="text-decoration:underline;">1.0 Sign Up</span>

Automated service for signing up to Salama Pamoja.

<span style="text-decoration:underline;"> </span>

<table>
  <tr>
   <td>#
   </td>
   <td>Script
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>1-1
   </td>
   <td>This is Salama
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1-2
   </td>
   <td>If you would like to join please have ready a list of phone numbers for your emergency contacts. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.3
   </td>
   <td>Press
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.3a
   </td>
   <td>to join Salama.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.3b
   </td>
   <td>to hear this message again. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.4
   </td>
   <td>Please start by telling us your name. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><em>(Record response). </em>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.5
   </td>
   <td>Thank you, now let's add your emergency contacts. We will automatically contact these people when you tell us you’re in danger. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.6
   </td>
   <td>Enter the phone number for your emergency contact followed by hash
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><em>(Capture inputted phone number)</em>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.7
   </td>
   <td>You entered<em> </em>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.7a
   </td>
   <td>is this correct?  
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.8
   </td>
   <td>Press 1 to confirm, Press 2 to try again
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.8a
   </td>
   <td>to confirm
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.8b
   </td>
   <td>to try again
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.9
   </td>
   <td>Would you like to add another emergency contact?
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.10
   </td>
   <td>Press 1 to add another, Press 2 to add the Police as a contact, Press 3 to finish adding emergency contacts
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.10a
   </td>
   <td>to add another
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.10b
   </td>
   <td>to finish adding emergency contacts
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>The Police have been added as an emergency contact. 
<p>
Press 1 to add another, Press 2 to finish adding emergency contacts
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.11 
   </td>
   <td>Thank you, you have successfully signed up to Ulinzi Pamoja. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.12 
   </td>
   <td>Next time you are in danger, phone <em>(XXX XXXXX) </em>and we will tell your emergency contacts. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.12a
   </td>
   <td>Next time you are in danger
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.12b
   </td>
   <td>and we will tell your emergency contacts. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1.13
   </td>
   <td>Goodbye
   </td>
   <td>
   </td>
  </tr>
</table>

<span style="text-decoration:underline;">1.14 SMS Confirmation of Sign Up</span>

<table>
  <tr>
   <td>#
   </td>
   <td>Text
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>1.14
   </td>
   <td>Welcome to Salama, you have added <em>(no.) </em>emergency contacts. 
<p>
<em>(XXX XXXXX), …. </em>
<p>
To change your emergency contacts call <em>(XXX XXXXX). </em>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Phone <em>(XXX XXXXX) </em>when you’re next in danger and we will contact your emergency contacts. 
   </td>
   <td>
   </td>
  </tr>
</table>

<span style="text-decoration:underline;">2.0 Contact Management</span>

Update existing emergency contact numbers or add a new contact<span style="text-decoration:underline;"> </span>

<table>
  <tr>
   <td>#
   </td>
   <td>Script
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>2.1
   </td>
   <td>This is Salama
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.2
   </td>
   <td>Press 1 to hear your emergency contacts or press 2 to add a contact
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.2a
   </td>
   <td> to hear your emergency contacts
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.2b
   </td>
   <td>to add a contact
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><em>IF 1</em>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.3
   </td>
   <td>You have an emergency contact with the phone number <em>(XXX XXXXX).</em>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.4
   </td>
   <td>Press 1 to hear the next contact.  Press 2 to delete this contact.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.4a
   </td>
   <td>to hear the next contact
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.4b
   </td>
   <td>to delete this contact.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.5
   </td>
   <td><em>IF 2</em>
<p>
<em>(XXX XXXXX)</em> will be deleted. Press 1 to confirm and hear the next contact. Press 2 to add a contact
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.5a
   </td>
   <td>will be deleted
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><em>IF 2 - add contact</em>
<p>
Enter the phone number for your emergency contact followed by hash
   </td>
   <td rowspan="5" >Same commands as signup journey. 
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>You entered<em> (XXX XXXXX),</em> is this correct? 
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Press 1 to confirm, Press 2 to try again
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Would you like to add another emergency contact?
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Press 1 to add another, Press 2 to finish adding emergency contacts
   </td>
  </tr>
  <tr>
   <td>2.6
   </td>
   <td>You have reached the end of your saved emergency contacts
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2.7
   </td>
   <td>Has been deleted.
   </td>
   <td>
   </td>
  </tr>
</table>

**<span style="text-decoration:underline;">3.0 Request Help</span>**

Raise the alarm and share your location and emergency.

<table>
  <tr>
   <td>#
   </td>
   <td>Script
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>3.1
   </td>
   <td>Hi, describe where you are and your emergency? 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><em>(Record response). </em>
   </td>
   <td>1 minute of recording possible
   </td>
  </tr>
  <tr>
   <td>3.1b
   </td>
   <td>Thank you.  Salama will now prepare to call your emergency contacts.  Stay on the line.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>3.1c
   </td>
   <td>You have not set up any contacts yet.  Please dial 333 to join Salama and set up emergency contacts.  This message will be sent to our administrator for your assistance.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>3.2
   </td>
   <td>Thank you.  Your emergency contacts will be contacted.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>3.3
   </td>
   <td>Phone <em>(XXX)</em> to cancel your request. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>3.3a
   </td>
   <td>to cancel your request.
   </td>
   <td>
   </td>
  </tr>
</table>

<span style="text-decoration:underline;">4.0 SMS Confirmation of Request Help</span>

<table>
  <tr>
   <td>#
   </td>
   <td>Text
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>4.0
   </td>
   <td>Cancel your request by sending 0. Salama
   </td>
   <td>
   </td>
  </tr>
</table>

<span style="text-decoration:underline;">4.1 SMS Confirmation of Cancellation </span>

<table>
  <tr>
   <td>#
   </td>
   <td>Text
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>4.1
   </td>
   <td>Your request has been cancelled. Salama
   </td>
   <td>
   </td>
  </tr>
</table>

<span style="text-decoration:underline;">5.0 Confirmation of Cancellation</span>

<table>
  <tr>
   <td>#
   </td>
   <td>Script
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>5.1
   </td>
   <td>Hi, This is Salama.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>5.2
   </td>
   <td>Your request for help from your emergency contacts has been cancelled. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>5.3 
   </td>
   <td>Phone <em>(XXX)</em> to request help. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>5.3a
   </td>
   <td>to request help. 
   </td>
   <td>
   </td>
  </tr>
</table>

**Emergency contacts**

**<span style="text-decoration:underline;">6.0 Friend is in danger</span>**

Automated call sharing the location and emergency of a friend in trouble.

<table>
  <tr>
   <td>#
   </td>
   <td>Script
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>6.1
   </td>
   <td>Hello this is Salama. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6.2
   </td>
   <td><em>(Play name)</em> is in danger.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6.2a
   </td>
   <td>Is in danger.
   </td>
   <td>Is this if we don’t have a name saved?
   </td>
  </tr>
  <tr>
   <td>6.3
   </td>
   <td><em>(Play recorded message)</em>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6.4
   </td>
   <td>We’ve notified all their emergency contacts.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6.5
   </td>
   <td>To hear this message again press 0. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6.6
   </td>
   <td>If you are able to help press 1.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6.7
   </td>
   <td><em>If 0 pressed</em>
<p>
<em>(Play recorded message). </em>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><em>If 1 pressed</em>
<p>
Thankyou, we have notified their other emergency contacts to let them know. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6.8
   </td>
   <td>This message will be saved and can be listened to again by dialling <em>(XXX XXXXX)</em> we will send this to you by SMS.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6.9a
   </td>
   <td>This message will be saved and can be listened to again by dialling
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6.9b
   </td>
   <td>we will send this to you by SMS.
   </td>
   <td>
   </td>
  </tr>
</table>

<span style="text-decoration:underline;">7.0 SMS Confirmation of Request </span>

<table>
  <tr>
   <td>#
   </td>
   <td>SMS confirmation for emergency contact
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>7.0
   </td>
   <td>Your friend is in danger. To hear their message again call <em>(XXX XXXXX). </em> Salama.
   </td>
   <td>
   </td>
  </tr>
</table>

<span style="text-decoration:underline;">8.0 SMS Someone is helping</span>

<table>
  <tr>
   <td>#
   </td>
   <td>SMS confirmation someone is helping
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>7.0
   </td>
   <td><em>(XXX XXXXX)</em>. Is able to help (name). Please contact them if you're able to help also. 
   </td>
   <td>
   </td>
  </tr>
</table>

<span style="text-decoration:underline;">9.0 Canceled emergency request</span>

<table>
  <tr>
   <td>#
   </td>
   <td>Cancelled emergency request
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>8.1
   </td>
   <td>Hello this is Salama. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>8.2
   </td>
   <td><em>(Play name)</em> has cancelled their request for help. You may still want to check in on them to be sure.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>8.3
   </td>
   <td>Thankyou
   </td>
   <td>
   </td>
  </tr>
</table>

**<span style="text-decoration:underline;">10.0 Additional recording required</span>**

<table>
  <tr>
   <td>#
   </td>
   <td>Script
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>9.1
   </td>
   <td>0
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.2
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.3
   </td>
   <td>2
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.4
   </td>
   <td>3
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.5
   </td>
   <td>4
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.6
   </td>
   <td>5
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.7
   </td>
   <td>6
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.8
   </td>
   <td>7
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.9
   </td>
   <td>8
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.10
   </td>
   <td>9
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.11
   </td>
   <td>10
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.12
   </td>
   <td>*
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.13
   </td>
   <td>#
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.14
   </td>
   <td>Good morning
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.15
   </td>
   <td>Good afternoon
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>9.16
   </td>
   <td>Good evening
   </td>
   <td>
   </td>
  </tr>
</table>

<span style="text-decoration:underline;">10.0 Hear friend’s emergency message</span>

<table>
  <tr>
   <td>#
   </td>
   <td>Cancelled emergency request
   </td>
   <td>Notes
   </td>
  </tr>
  <tr>
   <td>10.1
   </td>
   <td>Hello this is Salama. 
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>10.2
   </td>
   <td>To hear your friend’s emergency message, enter their number, followed by hash
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>
