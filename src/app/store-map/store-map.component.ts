import { Component, OnInit } from '@angular/core';
import { SearchPipe} from '../search.pipe';
declare var google: any;

@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
//  pipes:[SearchPipe],
  styleUrls: ['./store-map.component.css']
})
export class StoreMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  /*  var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);*/
  }


findperson = '';

addresses =[{"_id":"598236de74c03617d4f9fbdf","balance":"2132.53","name":"Prem","store":"Prem Hardwares","email":"parkersims@lunchpod.com","phone":"+91 (960) 560-3459","address":"615 Narrows Avenue, Hatteras, Oregon, 7096","registered":"2015-12-21T03:05:41 +05:00","latitude":-10.99619,"longitude":100.101365},{"_id":"598236de409d7525b3a8d8e6","balance":"2578.06","name":"Erickson Keller","store":"ORBALIX","email":"ericksonkeller@orbalix.com","phone":"+91 (945) 535-2985","address":"880 Sutton Street, Trexlertown, California, 7873","registered":"2016-08-03T09:47:32 +04:00","latitude":54.707834,"longitude":145.650035},{"_id":"598236de332575fffa497e30","balance":"2863.59","name":"Mann Torres","store":"QUARMONY","email":"manntorres@quarmony.com","phone":"+91 (875) 548-2935","address":"702 Madeline Court, Westmoreland, New Jersey, 3035","registered":"2015-08-15T08:51:51 +04:00","latitude":-5.851651,"longitude":-124.921283},{"_id":"598236deac71c28759ac6c03","balance":"3527.96","name":"Morton Watts","store":"DIGITALUS","email":"mortonwatts@digitalus.com","phone":"+91 (806) 515-2418","address":"325 Oriental Boulevard, Eureka, Alabama, 6002","registered":"2017-01-01T05:54:32 +05:00","latitude":49.361648,"longitude":179.809111},{"_id":"598236de361c7712e5357773","balance":"2224.43","name":"Arlene Todd","store":"EXODOC","email":"arlenetodd@exodoc.com","phone":"+91 (803) 418-2597","address":"561 Ridge Boulevard, Golconda, Palau, 7580","registered":"2016-10-23T05:37:22 +04:00","latitude":72.537031,"longitude":105.550274},{"_id":"598236dec67771984ff28914","balance":"2831.65","name":"Miranda Flores","store":"NETAGY","email":"mirandaflores@netagy.com","phone":"+91 (810) 452-2717","address":"826 Monitor Street, Lavalette, Colorado, 9609","registered":"2016-04-05T12:04:14 +04:00","latitude":14.081401,"longitude":68.372781},{"_id":"598236de44e734ddb229e4b2","balance":"1922.48","name":"Gilmore Mathews","store":"OPTICALL","email":"gilmoremathews@opticall.com","phone":"+91 (820) 499-2176","address":"655 Kensington Walk, Kula, Wisconsin, 6233","registered":"2014-09-11T05:14:19 +04:00","latitude":-40.112272,"longitude":-52.222599},{"_id":"598236de9069c84aa8558290","balance":"2679.05","name":"Guthrie Rosales","store":"QUALITEX","email":"guthrierosales@qualitex.com","phone":"+91 (819) 493-2454","address":"738 Claver Place, Woodlands, Utah, 1618","registered":"2016-03-02T01:54:39 +05:00","latitude":47.687455,"longitude":-142.238148},{"_id":"598236de859a1e737a4d6ed7","balance":"3542.24","name":"Foreman Noel","store":"PARCOE","email":"foremannoel@parcoe.com","phone":"+91 (951) 496-3910","address":"521 Bedford Place, Dante, Guam, 8077","registered":"2015-04-17T03:51:23 +04:00","latitude":80.743823,"longitude":167.636674},{"_id":"598236de4348320fa7ddd40c","balance":"2557.55","name":"Curtis Wells","store":"EQUITOX","email":"curtiswells@equitox.com","phone":"+91 (840) 472-3118","address":"189 Creamer Street, Belvoir, American Samoa, 8593","registered":"2015-08-22T02:01:55 +04:00","latitude":73.689194,"longitude":44.88677},{"_id":"598236dea477026671c3bd46","balance":"2069.05","name":"Haley Knox","store":"ARTWORLDS","email":"haleyknox@artworlds.com","phone":"+91 (894) 502-3141","address":"450 Sackman Street, Steinhatchee, Iowa, 252","registered":"2014-10-06T04:09:02 +04:00","latitude":-59.782514,"longitude":75.152225},{"_id":"598236de10a097b4da8cd6c1","balance":"2773.13","name":"Desiree Colon","store":"MOMENTIA","email":"desireecolon@momentia.com","phone":"+91 (943) 590-2515","address":"864 Joralemon Street, Staples, Arizona, 2855","registered":"2014-12-13T06:47:55 +05:00","latitude":-86.208098,"longitude":-175.431223},{"_id":"598236de710d8eb851d54eaf","balance":"3944.71","name":"Casey Rivers","store":"ISOSPHERE","email":"caseyrivers@isosphere.com","phone":"+91 (917) 523-2371","address":"381 Cherry Street, Hilltop, North Dakota, 8174","registered":"2015-01-14T01:42:27 +05:00","latitude":-9.942606,"longitude":57.860849},{"_id":"598236de0eefc167541721b3","balance":"1728.27","name":"Bessie Gibbs","store":"BEDDER","email":"bessiegibbs@bedder.com","phone":"+91 (802) 416-2654","address":"649 Brevoort Place, Chalfant, South Carolina, 6469","registered":"2015-08-24T04:08:51 +04:00","latitude":80.32836,"longitude":-150.081111},{"_id":"598236de595e7dabddb22aff","balance":"2963.13","name":"Keri Blankenship","store":"RETRACK","email":"keriblankenship@retrack.com","phone":"+91 (836) 551-2189","address":"548 Anna Court, Whitestone, Tennessee, 4618","registered":"2014-03-02T04:03:09 +05:00","latitude":36.126069,"longitude":7.033215}];

}
