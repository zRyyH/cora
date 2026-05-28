<?php
	if(isset( $_POST['f-nome']))
		$nome = $_POST['f-nome'];
	if(isset( $_POST['f-email']))
		$email = $_POST['f-email'];
	if(isset( $_POST['f-tel']))
		$telefone = $_POST['f-tel'];
	if(isset( $_POST['f-mensagem']))
		$mensagem = $_POST['f-mensagem'];
	
	$subject = 'Contato do Site';
	$content=" De: $nome \r\n E-mail: $email \r\n Telefone: $telefone \r\n Mensagem: $mensagem";
	$recipient = "contato@coraortopediavet.com.br";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $content, $mailheader) or die("Error!");
	
	header( 'Location: https://www.coraortopediavet.com.br/mensagem.html' );
	exit();
?>