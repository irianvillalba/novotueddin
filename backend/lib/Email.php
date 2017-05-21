<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 04/04/16
 * Time: 10:33
 * To change this template use File | Settings | File Templates.
 */

include_once "mail/class.phpmailer.php";

class Email {


    public function enviarEmail($email, $assunto, $mensagem, $from = null) {
        try {
            // Inicia a classe PHPMailer
            $mail = new PHPMailer();

            $mail->IsSMTP(); // Define que a mensagem será SMTP
            $mail->Host = "smtp.bnote.com.br"; // Endereço do servidor SMTP (caso queira utilizar a autenticação, utilize o host smtp.seudomínio.com.br)
            $mail->SMTPAuth = true; // Usar autenticação SMTP (obrigatório para smtp.seudomínio.com.br)
            $mail->Username = 'irian@bnote.com.br'; // Usuário do servidor SMTP (endereço de email)
            $mail->Password = 'beleza10'; // Senha do servidor SMTP (senha do email usado)

            $mail->From = "comercial@bnote.com.br"; // Seu e-mail
            $mail->Sender = "comercial@bnote.com.br"; // Seu e-mail
            if (isset($from))
                $mail->FromName = $from; // Seu nome
            else
            $mail->FromName = "B.Note - Seu aplicativo de beleza"; // Seu nome

            $mail->AddAddress($email);

            $mail->IsHTML(true); // Define que o e-mail será enviado como HTML
            $mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)

            $emailcorpo = "<table width='200' border='0' align='center'>
                              <tr style='margin: 0px; padding: 0px;' >
                                <td height='0' colspan='3'><img src='http://www.bnote.com.br/admin/img/mail/email_01.jpg'  /></td>
                              </tr>
                              <tr>
                                <td width='85px' style='margin: 0px; padding: 0px;'><img src='http://www.bnote.com.br/admin/img/mail/email_02.jpg' /></td>
                                <td valign='top' style='margin: 0px; padding: 0px;'><h3>$assunto</h3>
                                $mensagem
                                <p>B.Note - A sua Beleza em qualquer lugar a qualquer hora<br />
                                  www.bnote.com.br<br />
                                  comercial@bnote.com.br<br />
                                61. 3703-0833</p></td>
                                <td width='97px' height='0'><img src='http://www.bnote.com.br/admin/img/mail/email_04.jpg' align='right' /></td>
                              </tr>
                              <tr>
                                <td colspan='3'><img src='http://www.bnote.com.br/admin/img/mail/email_05.jpg' /></td>
                              </tr>
                            </table>";

            $mail->Subject  = $assunto; // Assunto da mensagem
            $mail->Body     = $emailcorpo;

            $enviado = $mail->Send();

            $mail->ClearAllRecipients();
            $mail->ClearAttachments();

            if ($enviado) {
                //echo "E-mail enviado com sucesso!";
            } else {
                //echo "Não foi possível enviar o e-mail.";
                //echo "Informações do erro: " . $mail->ErrorInfo;
            }

        } catch (Exception $e) {
            echo false;
        }
    }

}