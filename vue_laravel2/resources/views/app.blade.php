<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="csrf-token" value="{{ csrf_token() }}"/>
   <title>Laravel Vue Example</title>
   <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700|Material+Icons" rel="stylesheet">
</head>
<body style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px">
   <div id="app" class="d-flex flex-column flex-root">
   </div>
   <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>
</html>