<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title inertia>{{ config('app.name', 'GBS Mini Mart') }}</title>
    <link rel="icon" type="image/x-icon" href="/images/logo.svg">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/app/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia

</body>
<script>
    // Function to focus on body after printing
    function focusBodyAfterPrint(mediaQueryList) {
        if (mediaQueryList.matches) {
            // Focus on the body element after printing
            document.body.focus();
        }
    }

    // Check if the print media query matches
    var mediaQueryList = window.matchMedia('print');

    // Call the function when the print media query changes
    mediaQueryList.addListener(focusBodyAfterPrint);

    // Call the function immediately to handle initial state
    focusBodyAfterPrint(mediaQueryList);
</script>

</html>