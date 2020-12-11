---
---
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('blog').then(function(cache) {
    return cache.addAll([
      {% for page in site.pages %}
      '{{ page.url | remove: '.html' }}',
      {% endfor %}
      {% for post in site.posts %}
      '{{ post.url | remove: '.html' }}',
      {% endfor %}
      {% for file in site.static_files %}
      '{{ site.baseurl }}{{ file.path }}',
      {% endfor %}                
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
      'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
      'https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js',
      'https://cdn.jsdelivr.net/autocomplete.js/0.30.0/autocomplete.jquery.min.js',
      'https://code.highcharts.com/highcharts.js',      
    ]);
  }));
});

self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(response) { 
    return response;
  }));
});
