<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <title><?php wp_title('|', true, 'right'); bloginfo('name')?></title>
    <meta name="description"
        content="">
    <link rel="icon" type="image/svg+xml" href="/images/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://unpkg.com/destyle.css@1.0.5/destyle.css">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" >
    <script src="https://kit.fontawesome.com/b8a7fea4d4.js" crossorigin="anonymous"></script>
</head>

<body>
    <header id="header" class="container">
        <h1><a href="<?php echo home_url('/'); ?>"><?php bloginfo('name'); ?></a></h1>
        <?php wp_nav_menu(); ?>
    </header><!-- /.header -->

<?php wp_head(); ?>