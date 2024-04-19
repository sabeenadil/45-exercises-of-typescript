function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three function and creating three variables with different values
var album1 = make_album("Artist no.1", "Album title 1");
console.log(album1);
var album2 = make_album("Artist no.2", "Album title 2");
var album3 = make_album("Artist no.3", "Albumtitle 3", 10);
console.log(album2);
console.log(album3);
