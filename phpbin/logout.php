<?php
	session_start();
	session_destroy();
	$ans="destroy";
	echo $ans;
?>