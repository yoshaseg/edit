matchers = function (pathinfo) {
    var matches;

    //container_63
    matches = pathinfo.match(/^\/(issue\/test)$/);
    if (matches != null) {
        return {site_key: "gizmodo", container_id: 63, container_type: "page", defaults: {issue: matches[1]}};
    }

    //container_83
    matches = pathinfo.match(/^\/(issue\/playstation_vr_special_issue)$/);
    if (matches != null) {
        return {site_key: "gizmodo", container_id: 83, container_type: "page", defaults: {issue: matches[1]}};
    }

    //container_89
    matches = pathinfo.match(/^\/(issue\/gizmodo_switch)$/);
    if (matches != null) {
        return {site_key: "gizmodo", container_id: 89, container_type: "page", defaults: {issue: matches[1]}};
    }

    if (pathinfo === '/test') {
        return {site_key: "gizmodo", container_id: 4, container_type: "static_page"};
    }

    //container_5
    if (pathinfo === '/advertising') {
        return {site_key: "gizmodo", container_id: 5, container_type: "static_page"};
    }

    //container_10
    if (pathinfo === '/404NotFound') {
        return {site_key: "gizmodo", container_id: 10, container_type: "static_page"};
    }

    //container_11
    if (pathinfo === '/subscribe') {
        return {site_key: "gizmodo", container_id: 11, container_type: "static_page"};
    }

    //container_12
    if (pathinfo === '/unsucscribe') {
        return {site_key: "gizmodo", container_id: 12, container_type: "static_page"};
    }

    //container_57
    if (pathinfo === '/taglist') {
        return {site_key: "gizmodo", container_id: 57, container_type: "static_page"};
    }

    //container_60
    if (pathinfo === '/adtag-test-post') {
        return {site_key: "gizmodo", container_id: 60, container_type: "static_page"};
    }

    //container_61
    if (pathinfo === '/adtag-test-top') {
        return {site_key: "gizmodo", container_id: 61, container_type: "static_page"};
    }

    //container_69
    if (pathinfo === '/search') {
        return {site_key: "gizmodo", container_id: 69, container_type: "static_page"};
    }

    //container_2
    if (pathinfo === '/') {
        return {site_key: "gizmodo", container_id: 2, container_type: "page"};
    }

    //container_7
    matches = pathinfo.match(/^\/(category\/technology|category\/science|category\/product|category\/entertainment|category\/lifestyle|category\/design|category\/business|category\/news)$/);
    if (matches != null) {
        return {site_key: "gizmodo", container_id: 7, container_type: "page", defaults: {category: matches[1]}};
    }

    //container_8
    matches = pathinfo.match(/^\/(tag\/gadget|tag\/av|tag\/av\/portable|tag\/av\/tv|tag\/av\/speaker|tag\/av\/headphone|tag\/web|tag\/web\/browser|tag\/web\/map|tag\/web\/map\/cat336|tag\/web\/auction|tag\/web\/facebook|tag\/web\/twitter|tag\/web\/skype|tag\/mobby|tag\/mobby\/docomo|tag\/mobby\/au|tag\/mobby\/softbank|tag\/mobby\/emobile|tag\/mobby\/mvno|tag\/camera|tag\/camera\/digital|tag\/camera\/toy|tag\/camera\/digital_camera|tag\/camera\/gopro|tag\/gear|tag\/gear\/mouse|tag\/gear\/keyboard|tag\/gear\/usb|tag\/gear\/pc_1|tag\/game|tag\/software|tag\/software\/freesoft|tag\/machine|tag\/machine\/car|tag\/machine\/bicycle|tag\/machine\/bike|tag\/machine\/airplane|tag\/machine\/ship_boat|tag\/machine\/train|tag\/robot|tag\/robot\/animal|tag\/robot\/humanoid|tag\/fashion|tag\/fashion\/wristwatch|tag\/fashion\/clothes|tag\/fashion\/shoes|tag\/fashion\/accessories|tag\/fashion\/stationery|tag\/fashion\/strap|tag\/fashion\/cosplay|tag\/interior|tag\/interior\/kitchen|tag\/interior\/living|tag\/interior\/light|tag\/interior\/bathgoods|tag\/interior\/toilet|tag\/interior\/clock|tag\/news|tag\/news\/cat300|tag\/news\/fbi|tag\/news\/cat352|tag\/news\/disaster|tag\/home_electronics|tag\/home_electronics\/kitchen|tag\/home_electronics\/cat190|tag\/home_electronics\/air_conditioning|tag\/home_electronics\/cat342|tag\/art|tag\/art\/objet|tag\/art\/interactive|tag\/art\/steampunk|tag\/art\/cat317|tag\/building|tag\/building\/house|tag\/building\/cat193|tag\/building\/bridge|tag\/building\/cat335|tag\/shop|tag\/shop\/amazon|tag\/shop\/rakuten|tag\/shop\/appbank_store|tag\/shop\/machi-ya|tag\/science|tag\/science\/nasa|tag\/science\/study|tag\/science\/cat348|tag\/science\/cat365|tag\/toy|tag\/toy\/lego|tag\/toy\/radicon|tag\/toy\/transformer|tag\/toy\/cat272|tag\/smartphone|tag\/smartphone\/android|tag\/smartphone\/android\/android_1|tag\/smartphone\/windows_phone|tag\/smartphone\/windows_phone\/windows_phone_1|tag\/person|tag\/ecology|tag\/ecology\/solarpower|tag\/ecology\/windpower|tag\/ecology\/recycle|tag\/report|tag\/report\/event|tag\/report\/event\/ceatec2008|tag\/report\/event\/tgs2008|tag\/report\/event\/ces2009|tag\/report\/event\/pie2009|tag\/report\/event\/tms|tag\/report\/event\/wwdc|tag\/report\/interview|tag\/report\/2015|tag\/summary|tag\/live|tag\/review|tag\/review\/cat326|tag\/enterprise|tag\/enterprise\/apple|tag\/enterprise\/apple\/steve_jobs|tag\/enterprise\/apple\/apple_product|tag\/enterprise\/apple\/apple_product\/ipod|tag\/enterprise\/apple\/apple_product\/iphone|tag\/enterprise\/apple\/apple_product\/iphone\/iphone7|tag\/enterprise\/apple\/apple_product\/tools|tag\/enterprise\/apple\/apple_product\/itunes|tag\/enterprise\/apple\/apple_product\/mac|tag\/enterprise\/apple\/apple_product\/mac\/mac_os|tag\/enterprise\/apple\/apple_product\/ipad|tag\/enterprise\/apple\/apple_product\/ios|tag\/enterprise\/apple\/apple_product\/apple_watch|tag\/enterprise\/microsoft|tag\/enterprise\/microsoft\/bill_gates|tag\/enterprise\/microsoft\/steven_anthony_ballmer|tag\/enterprise\/microsoft\/microsoft_product|tag\/enterprise\/microsoft\/microsoft_product\/windows|tag\/enterprise\/microsoft\/microsoft_product\/xbox360|tag\/enterprise\/microsoft\/microsoft_product\/kinect|tag\/enterprise\/microsoft\/microsoft_product\/xbox_one_1|tag\/enterprise\/sony|tag\/enterprise\/sony\/sony_product|tag\/enterprise\/sony\/sony_product\/psp|tag\/enterprise\/sony\/sony_product\/ps3|tag\/enterprise\/sony\/sony_product\/ngp|tag\/enterprise\/sony\/sony_product\/ps4|tag\/enterprise\/toyota|tag\/enterprise\/nintendo|tag\/enterprise\/nintendo\/nintendo_product|tag\/enterprise\/nintendo\/nintendo_product\/wii|tag\/enterprise\/nintendo\/nintendo_product\/ds|tag\/enterprise\/nintendo\/nintendo_product\/famicomnes|tag\/enterprise\/nintendo\/nintendo_product\/3ds|tag\/enterprise\/honda|tag\/enterprise\/google|tag\/enterprise\/ibm|tag\/enterprise\/cat363|tag\/enterprise\/cat363\/cat357|tag\/military|tag\/diy|tag\/diy\/3d|tag\/video|tag\/video\/cat294|tag\/musicalinstrument|tag\/food_drink|tag\/movie|tag\/movie\/starwars|tag\/christmas2008|tag\/cat271|tag\/pr|tag\/ipad|tag\/upload_files2|tag\/cat295|tag\/cat297|tag\/cat315|tag\/cat316|tag\/cat316\/gundam|tag\/cat316\/akiba|tag\/cat316\/cat302|tag\/cat319|tag\/cat322|tag\/cat322\/kindle|tag\/cat337|tag\/wearable|tag\/wearable\/smartwatch|tag\/cat349|tag\/cat349\/conceptdesign|tag\/cat353|tag\/cat355|tag\/cat359|tag\/internet_of_things_iot|tag\/ai|tag\/vr|tag\/vr\/cat347|tag\/vr\/oculus_rift|tag\/vr\/playstation_vr|tag\/cat374|tag\/entertainment|tag\/entertainment\/netflix|tag\/product|tag\/del|tag\/del\/photo|tag\/del\/cat283|tag\/del\/cat283\/memory_forever|tag\/del\/cat291|tag\/del\/cat305|tag\/del\/cat312|tag\/del\/cat346|tag\/del\/brandtalk|tag\/del\/foodie|tag\/sports|tag\/sports\/cat368|tag\/cat377|tag\/cat377\/info|tag\/cat377\/willcom|tag\/cat377\/nsfw|tag\/cat377\/macworld_wwdc_2009|tag\/cat377\/palm_pre|tag\/cat377\/cat276|tag\/cat377\/cat276\/cat277|tag\/cat377\/cat276\/kotaku|tag\/cat377\/cat276\/cat279|tag\/cat377\/cat276\/tabroid|tag\/cat377\/cat276\/roomie|tag\/cat377\/cat287|tag\/cat377\/cat288|tag\/cat377\/iphone_4|tag\/cat377\/gizmodo_loves_japan_project|tag\/cat377\/cycle_mode|tag\/cat377\/buy|tag\/cat377\/shopping|tag\/cat377\/ioc|tag\/overseas|tag\/overseas\/burj_dubai|tag\/overseas\/china|tag\/overseas\/cat333|tag\/overseas\/cat371)$/);
    if (matches != null) {
        return {site_key: "gizmodo", container_id: 8, container_type: "page", defaults: {tag: matches[1]}};
    }

    //container_9
    matches = pathinfo.match(/^\/(issue\/test|issue\/test2|issue\/cat|issue\/playstation_vr_special_issue|issue\/gizmodo_switch)$/);
    if (matches != null) {
        return {site_key: "gizmodo", container_id: 9, container_type: "page", defaults: {issue: matches[1]}};
    }

    //container_14
    if (pathinfo === '/articles') {
        return {site_key: "gizmodo", container_id: 14, container_type: "page"};
    }

    //container_56
    if (pathinfo === '/testtop') {
        return {site_key: "gizmodo", container_id: 56, container_type: "page"};
    }

    //container_58
    matches = pathinfo.match(/^\/(article_type\/mugendai|article_type\/sponsored|article_type\/sponsored_movie|article_type\/buy|article_type\/live|article_type\/machi-ya|article_type\/business_insider)$/);
    if (matches != null) {
        return {site_key: "gizmodo", container_id: 58, container_type: "page", defaults: {article_type: matches[1]}};
    }

    //container_3
    if (pathinfo === '/index.xml') {
        return {site_key: "gizmodo", container_id: 3, container_type: "feed"};
    }

    //container_15
    if (pathinfo === '/antenna.xml') {
        return {site_key: "gizmodo", container_id: 15, container_type: "feed"};
    }

    //container_16
    if (pathinfo === '/atom_dcm.xml') {
        return {site_key: "gizmodo", container_id: 16, container_type: "feed"};
    }

    //container_17
    if (pathinfo === '/mobby/android/feed.xml') {
        return {site_key: "gizmodo", container_id: 17, container_type: "feed"};
    }

    //container_18
    if (pathinfo === '/amebanews_renew.xml') {
        return {site_key: "gizmodo", container_id: 18, container_type: "feed"};
    }

    //container_19
    if (pathinfo === '/biglobe_feed/newsindex.xml') {
        return {site_key: "gizmodo", container_id: 19, container_type: "feed"};
    }

    //container_20
    if (pathinfo === '/couples_feed.xml') {
        return {site_key: "gizmodo", container_id: 20, container_type: "feed"};
    }

    //container_21
    if (pathinfo === '/index_for_facebook.xml') {
        return {site_key: "gizmodo", container_id: 21, container_type: "feed"};
    }

    //container_22
    if (pathinfo === '/instant-article.xml') {
        return {site_key: "gizmodo", container_id: 22, container_type: "feed"};
    }

    //container_23
    if (pathinfo === '/flipboard.xml') {
        return {site_key: "gizmodo", container_id: 23, container_type: "feed"};
    }

    //container_24
    if (pathinfo === '/google_newsstand.xml') {
        return {site_key: "gizmodo", container_id: 24, container_type: "feed"};
    }

    //container_25
    if (pathinfo === '/goonews_feed.xml') {
        return {site_key: "gizmodo", container_id: 25, container_type: "feed"};
    }

    //container_26
    if (pathinfo === '/goonews_ima_feed.xml') {
        return {site_key: "gizmodo", container_id: 26, container_type: "feed"};
    }

    //container_27
    if (pathinfo === '/intely.xml') {
        return {site_key: "gizmodo", container_id: 27, container_type: "feed"};
    }

    //container_28
    if (pathinfo === '/kddi_feed.xml') {
        return {site_key: "gizmodo", container_id: 28, container_type: "feed"};
    }

    //container_29
    if (pathinfo === '/linenews_feed.xml') {
        return {site_key: "gizmodo", container_id: 29, container_type: "feed"};
    }

    //container_30
    if (pathinfo === '/mixi_feed.xml') {
        return {site_key: "gizmodo", container_id: 30, container_type: "feed"};
    }

    //container_31
    if (pathinfo === '/mixi_feed_new.xml') {
        return {site_key: "gizmodo", container_id: 31, container_type: "feed"};
    }

    //container_32
    if (pathinfo === '/newnews.xml') {
        return {site_key: "gizmodo", container_id: 32, container_type: "feed"};
    }

    //container_33
    if (pathinfo === '/t-site_feed.xml') {
        return {site_key: "gizmodo", container_id: 33, container_type: "feed"};
    }

    //container_34
    if (pathinfo === '/tvtokyo_feed.xml') {
        return {site_key: "gizmodo", container_id: 34, container_type: "feed"};
    }

    //container_35
    if (pathinfo === '/twinavi.xml') {
        return {site_key: "gizmodo", container_id: 35, container_type: "feed"};
    }

    //container_36
    if (pathinfo === '/index_for_twitter.xml') {
        return {site_key: "gizmodo", container_id: 36, container_type: "feed"};
    }

    //container_37
    if (pathinfo === '/yomerumo_feed.xml') {
        return {site_key: "gizmodo", container_id: 37, container_type: "feed"};
    }

    //container_38
    if (pathinfo === '/tokumodo.xml') {
        return {site_key: "gizmodo", container_id: 38, container_type: "feed"};
    }

    //container_39
    if (pathinfo === '/is_feed.xml') {
        return {site_key: "gizmodo", container_id: 39, container_type: "feed"};
    }

    //container_40
    if (pathinfo === '/index_giz.xml') {
        return {site_key: "gizmodo", container_id: 40, container_type: "feed"};
    }

    //container_41
    if (pathinfo === '/club_buisiness_feed.xml') {
        return {site_key: "gizmodo", container_id: 41, container_type: "feed"};
    }

    //container_42
    if (pathinfo === '/ifttt_tweet_feed.xml') {
        return {site_key: "gizmodo", container_id: 42, container_type: "feed"};
    }

    //container_43
    if (pathinfo === '/au_feed2.xml') {
        return {site_key: "gizmodo", container_id: 43, container_type: "feed"};
    }

    //container_44
    if (pathinfo === '/excite_feed.xml') {
        return {site_key: "gizmodo", container_id: 44, container_type: "feed"};
    }

    //container_45
    if (pathinfo === '/favclip.xml') {
        return {site_key: "gizmodo", container_id: 45, container_type: "feed"};
    }

    //container_46
    if (pathinfo === '/gunosy_newspass.xml') {
        return {site_key: "gizmodo", container_id: 46, container_type: "feed"};
    }

    //container_47
    if (pathinfo === '/gunosy_feed.xml') {
        return {site_key: "gizmodo", container_id: 47, container_type: "feed"};
    }

    //container_48
    if (pathinfo === '/nec_feed.xml') {
        return {site_key: "gizmodo", container_id: 48, container_type: "feed"};
    }

    //container_49
    if (pathinfo === '/smartformat_v2.xml') {
        return {site_key: "gizmodo", container_id: 49, container_type: "feed"};
    }

    //container_50
    if (pathinfo === '/yahoo_netarika.xml') {
        return {site_key: "gizmodo", container_id: 50, container_type: "feed"};
    }

    //container_51
    if (pathinfo === '/nico3.xml') {
        return {site_key: "gizmodo", container_id: 51, container_type: "feed"};
    }

    //container_52
    if (pathinfo === '/nhn_feed.xml') {
        return {site_key: "gizmodo", container_id: 52, container_type: "feed"};
    }

    //container_53
    if (pathinfo === '/_msnfeed2011/index.xml') {
        return {site_key: "gizmodo", container_id: 53, container_type: "feed"};
    }

    //container_54
    if (pathinfo === '/_msnfeed2014/index.xml') {
        return {site_key: "gizmodo", container_id: 54, container_type: "feed"};
    }

    //container_55
    if (pathinfo === '/livedoor_feed.xml') {
        return {site_key: "gizmodo", container_id: 55, container_type: "feed"};
    }

    //container_1
    matches = pathinfo.match(/^(\/amp)?\/(\d{4})\/(\d{2})\/([^\\/]+)\.html$/);
    if (matches != null) {
        return {site_key: "gizmodo", container_id: 1, container_type: "article_page", defaults: {year: matches[2], month: matches[3], postname: matches[4]}};
    }

    //container_59
    matches = pathinfo.match(/^(\/amp)?\/(\d{4})\/(\d{2})\/([^\\/]+)\.html$/);
    if (matches != null) {
        return {site_key: "gizmodo", container_id: 59, container_type: "article_page", defaults: {year: matches[2], month: matches[3], postname: matches[4]}};
    }


};
