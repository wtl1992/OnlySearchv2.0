$(function () {
    let pageIndex = 0;

    Vue.use(VueLazyload,{
        error: '/static/images/bg.gif',
        loading: '/static/images/bg.gif'
    });

    let rooter = new Vue({
        el:"#rooter",
        data:()=>{
            return {
                catalogue : null,
                currentChannel : null,
                videoList: null,
                variety : null,
                varietyKind: null,
                varietyArea: null,
                varietySort: null,
                varietyKindCurrentIndex: null,
                varietyAreaCurrentIndex: null,
                varietySortCurrentIndex: null,
                tv: null,
                tvKind: null,
                tvArea: null,
                tvYear: null,
                tvSort: null,
                tvEdition: null,
                tvChargeInfo: null,
                tvKindCurrentIndex: null,
                tvAreaCurrentIndex: null,
                tvYearCurrentIndex: null,
                tvSortCurrentIndex: null,
                tvEditionCurrentIndex: null,
                tvChargeInfoCurrentIndex: null,
                movie: null,
                movieKind: null,
                movieArea: null,
                movieYear: null,
                movieSort: null,
                movieEdition: null,
                movieChargeInfo: null,
                movieKindCurrentIndex: null,
                movieAreaCurrentIndex: null,
                movieYearCurrentIndex: null,
                movieSortCurrentIndex: null,
                movieEditionCurrentIndex: null,
                movieChargeInfoCurrentIndex: null,
                child: null,
                childKind: null,
                childArea: null,
                childYear: null,
                childSort: null,
                childEdition: null,
                childChargeInfo: null,
                childFitAge: null,
                childKindCurrentIndex: null,
                childAreaCurrentIndex: null,
                childYearCurrentIndex: null,
                childSortCurrentIndex: null,
                childEditionCurrentIndex: null,
                childChargeInfoCurrentIndex: null,
                childFitAgeCurrentIndex: null,
                music: null,
                musicKind: null,
                musicArea: null,
                musicYear: null,
                musicSort: null,
                musicEdition: null,
                musicChargeInfo: null,
                musicFitAge: null,
                musicMusicStyle: null,
                musicKindCurrentIndex: null,
                musicAreaCurrentIndex: null,
                musicYearCurrentIndex: null,
                musicSortCurrentIndex: null,
                musicEditionCurrentIndex: null,
                musicChargeInfoCurrentIndex: null,
                musicFitAgeCurrentIndex: null,
                musicMusicStyleCurrentIndex: null,
                comic: null,
                comicKind: null,
                comicArea: null,
                comicYear: null,
                comicSort: null,
                comicEdition: null,
                comicChargeInfo: null,
                comicFitAge: null,
                comicMusicStyle: null,
                comicKindCurrentIndex: null,
                comicAreaCurrentIndex: null,
                comicYearCurrentIndex: null,
                comicSortCurrentIndex: null,
                comicEditionCurrentIndex: null,
                comicChargeInfoCurrentIndex: null,
                comicFitAgeCurrentIndex: null,
                comicMusicStyleCurrentIndex: null,
                documentary: null,
                documentaryKind: null,
                documentaryArea: null,
                documentaryYear: null,
                documentarySort: null,
                documentaryEdition: null,
                documentaryChargeInfo: null,
                documentaryFitAge: null,
                documentaryMusicStyle: null,
                documentaryKindCurrentIndex: null,
                documentaryAreaCurrentIndex: null,
                documentaryYearCurrentIndex: null,
                documentarySortCurrentIndex: null,
                documentaryEditionCurrentIndex: null,
                documentaryChargeInfoCurrentIndex: null,
                documentaryFitAgeCurrentIndex: null,
                documentaryMusicStyleCurrentIndex: null,
                happyLife: null,
                happyLifeKind: null,
                happyLifeArea: null,
                happyLifeYear: null,
                happyLifeSort: null,
                happyLifeEdition: null,
                happyLifeChargeInfo: null,
                happyLifeFitAge: null,
                happyLifeMusicStyle: null,
                happyLifeKindCurrentIndex: null,
                happyLifeAreaCurrentIndex: null,
                happyLifeYearCurrentIndex: null,
                happyLifeSortCurrentIndex: null,
                happyLifeEditionCurrentIndex: null,
                happyLifeChargeInfoCurrentIndex: null,
                happyLifeFitAgeCurrentIndex: null,
                happyLifeMusicStyleCurrentIndex: null,
                news: null,
                newsKind: null,
                newsArea: null,
                newsYear: null,
                newsSort: null,
                newsEdition: null,
                newsChargeInfo: null,
                newsFitAge: null,
                newsMusicStyle: null,
                newsKindCurrentIndex: null,
                newsAreaCurrentIndex: null,
                newsYearCurrentIndex: null,
                newsSortCurrentIndex: null,
                newsEditionCurrentIndex: null,
                newsChargeInfoCurrentIndex: null,
                newsFitAgeCurrentIndex: null,
                newsMusicStyleCurrentIndex: null,
                enterment: null,
                entermentKind: null,
                entermentArea: null,
                entermentYear: null,
                entermentSort: null,
                entermentEdition: null,
                entermentChargeInfo: null,
                entermentFitAge: null,
                entermentMusicStyle: null,
                entermentKindCurrentIndex: null,
                entermentAreaCurrentIndex: null,
                entermentYearCurrentIndex: null,
                entermentSortCurrentIndex: null,
                entermentEditionCurrentIndex: null,
                entermentChargeInfoCurrentIndex: null,
                entermentFitAgeCurrentIndex: null,
                entermentMusicStyleCurrentIndex: null,
                education: null,
                educationKind: null,
                educationArea: null,
                educationYear: null,
                educationSort: null,
                educationEdition: null,
                educationChargeInfo: null,
                educationFitAge: null,
                educationMusicStyle: null,
                educationKindCurrentIndex: null,
                educationAreaCurrentIndex: null,
                educationYearCurrentIndex: null,
                educationSortCurrentIndex: null,
                educationEditionCurrentIndex: null,
                educationChargeInfoCurrentIndex: null,
                educationFitAgeCurrentIndex: null,
                educationMusicStyleCurrentIndex: null,
                game: null,
                gameKind: null,
                gameArea: null,
                gameYear: null,
                gameSort: null,
                gameEdition: null,
                gameChargeInfo: null,
                gameFitAge: null,
                gameMusicStyle: null,
                gameKindCurrentIndex: null,
                gameAreaCurrentIndex: null,
                gameYearCurrentIndex: null,
                gameSortCurrentIndex: null,
                gameEditionCurrentIndex: null,
                gameChargeInfoCurrentIndex: null,
                gameFitAgeCurrentIndex: null,
                gameMusicStyleCurrentIndex: null,
                sport: null,
                sportKind: null,
                sportArea: null,
                sportYear: null,
                sportSort: null,
                sportEdition: null,
                sportChargeInfo: null,
                sportFitAge: null,
                sportMusicStyle: null,
                sportKindCurrentIndex: null,
                sportAreaCurrentIndex: null,
                sportYearCurrentIndex: null,
                sportSortCurrentIndex: null,
                sportEditionCurrentIndex: null,
                sportChargeInfoCurrentIndex: null,
                sportFitAgeCurrentIndex: null,
                sportMusicStyleCurrentIndex: null,
                origin: null,
                originKind: null,
                originArea: null,
                originYear: null,
                originSort: null,
                originEdition: null,
                originChargeInfo: null,
                originFitAge: null,
                originMusicStyle: null,
                originKindCurrentIndex: null,
                originAreaCurrentIndex: null,
                originYearCurrentIndex: null,
                originSortCurrentIndex: null,
                originEditionCurrentIndex: null,
                originChargeInfoCurrentIndex: null,
                originFitAgeCurrentIndex: null,
                originMusicStyleCurrentIndex: null,
                platformSelected: null,
                channelIdSelected: null,
                pageIndexSelected: null,
                pageSizeSelected: null,
                hudongSelected: null,
                supportSelected: null,
                kindSelected: null,
                areaSelected: null,
                sortSelected: null,
                abroadSelected: null,
                srcSelected: null,
                yearSelected: null,
                editionSelected: null,
                chargeInfoSelected: null,
                fitAgeSelected: null,
                musicStyleSelected: null
            };
        },
        created: ()=>{
            $.ajax({
                type: "GET",
                url: "/metv/getCatalogue",
                dataType: "json",
                success: function (data) {
                    rooter.catalogue = data.catalogue;
                }
            });

            readVarietyConfig();

        }
    });

    rooter.$watch("catalogue",()=>{
        /**
         * 处理channel的切换
         */
        let channelLis = $("#rooter ul.main li");
        channelLis.unbind().click(function () {
            let channelString = $(this).text();
            switch (channelString) {
                case "综艺":
                    rooter.currentChannel = "variety";
                    rooter.channelIdSelected = "1";
                    readVarietyConfig();
                    break;
                case "电视剧":
                    rooter.currentChannel = "tv";
                    rooter.channelIdSelected = "2";
                    readTvConfig();
                    break;
                case "电影":
                    rooter.currentChannel = "movie";
                    rooter.channelIdSelected = "3";
                    readMovieConfig();
                    break;
                case "少儿":
                    rooter.currentChannel = "child";
                    rooter.channelIdSelected = "10";
                    readChildConfig();
                    break;
                case "音乐":
                    rooter.currentChannel = "music";
                    rooter.channelIdSelected = "20";
                    readMusicConfig();
                    break;
                case "动漫":
                    rooter.currentChannel = "comic";
                    rooter.channelIdSelected = "50";
                    readComicConfig();
                    break;
                case "纪录片":
                    rooter.currentChannel = "documentary";
                    rooter.channelIdSelected = "51";
                    readDocumentaryConfig();
                    break;
                case "乐活":
                    rooter.currentChannel = "happyLife";
                    rooter.channelIdSelected = "105";
                    readHappyLifeConfig();
                    break;
                case "新闻":
                    rooter.currentChannel = "happyLife";
                    rooter.channelIdSelected = "106";
                    readNewsConfig();
                    break;
                case "娱乐":
                    rooter.currentChannel = "enterment";
                    rooter.channelIdSelected = "113";
                    readEntermentConfig();
                    break;
                case "教育":
                    rooter.currentChannel = "education";
                    rooter.channelIdSelected = "115";
                    readEducationConfig();
                    break;
                case "游戏":
                    rooter.currentChannel = "game";
                    rooter.channelIdSelected = "116";
                    readGameConfig();
                    break;
                case "体育":
                    rooter.currentChannel = "sport";
                    rooter.channelIdSelected = "117";
                    readSportConfig();
                    break;
                case "原创":
                    rooter.currentChannel = "origin";
                    rooter.channelIdSelected = "111";
                    readOriginConfig();
                    break;
                default:
                    break;
            }
            commonAjax();
            channelLis.removeClass("focus");
            $(this).addClass("focus");
        });
    });


    rooter.$watch("variety", function () {
        rooter.currentChannel = "variety";
        commonAjax();

        let varietyKindLis = $("ul.variety-kind li");
        varietyKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            varietyKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let varietyAreaLis = $("ul.variety-area li");
        varietyAreaLis.unbind().click(function () {
            rooter.areaSelected = $(this).find("span").attr("area");
            varietyAreaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let varietySortLis = $("ul.variety-sort li");
        varietySortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            varietySortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });

    rooter.$watch("tv", function () {
        rooter.currentChannel = "tv";
        commonAjax();

        let tvKindLis = $("ul.tv-kind li");
        tvKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            tvKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let tvAreaLis = $("ul.tv-area li");
        tvAreaLis.unbind().click(function () {
            rooter.areaSelected = $(this).find("span").attr("area");
            tvAreaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let tvYearLis = $("ul.tv-year li");
        tvYearLis.unbind().click(function () {
            rooter.yearSelected = $(this).find("span").attr("year");
            tvYearLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let tvSortLis = $("ul.tv-sort li");
        tvSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            tvSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let tvEditionLis = $("ul.tv-edition li");
        tvEditionLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("edition");
            tvEditionLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let tvChargeInfoLis = $("ul.tv-chargeInfo li");
        tvChargeInfoLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("chargeInfo");
            tvChargeInfoLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });

    rooter.$watch("movie", function () {
        rooter.currentChannel = "movie";
        commonAjax();

        let movieKindLis = $("ul.movie-kind li");
        movieKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            movieKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let movieAreaLis = $("ul.movie-area li");
        movieAreaLis.unbind().click(function () {
            rooter.areaSelected = $(this).find("span").attr("area");
            movieAreaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let movieYearLis = $("ul.movie-year li");
        movieYearLis.unbind().click(function () {
            rooter.yearSelected = $(this).find("span").attr("year");
            movieYearLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let movieSortLis = $("ul.movie-sort li");
        movieSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            movieSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let movieEditionLis = $("ul.movie-edition li");
        movieEditionLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("edition");
            movieEditionLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let movieChargeInfoLis = $("ul.movie-chargeInfo li");
        movieChargeInfoLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("chargeInfo");
            movieChargeInfoLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });

    rooter.$watch("child", function () {
        rooter.currentChannel = "child";
        commonAjax();

        let childKindLis = $("ul.child-kind li");
        childKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            childKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let childFitAgeLis = $("ul.child-fitAge li");
        childFitAgeLis.unbind().click(function () {
            rooter.areaSelected = $(this).find("span").attr("fitAge");
            childFitAgeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });

    rooter.$watch("music", function () {
        rooter.currentChannel = "music";
        commonAjax();

        let musicKindLis = $("ul.music-kind li");
        musicKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            musicKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let musicMusicStyleLis = $("ul.music-musicStyle li");
        musicMusicStyleLis.unbind().click(function () {
            rooter.musicStyleSelected = $(this).find("span").attr("musicStyle");
            musicMusicStyleLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let musicSortLis = $("ul.music-sort li");
        musicSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            musicSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });

    rooter.$watch("comic", function () {
        rooter.currentChannel = "comic";
        commonAjax();

        let comicKindLis = $("ul.comic-kind li");
        comicKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            comicKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let comicAreaLis = $("ul.comic-area li");
        comicAreaLis.unbind().click(function () {
            rooter.areaSelected = $(this).find("span").attr("area");
            comicAreaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let comicEditionLis = $("ul.comic-edition li");
        comicEditionLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("edition");
            comicEditionLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let comicSortLis = $("ul.comic-sort li");
        comicSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            comicSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });

    rooter.$watch("documentary", function () {
        rooter.currentChannel = "documentary";
        commonAjax();

        let documentaryKindLis = $("ul.documentary-kind li");
        documentaryKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            documentaryKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let documentarySortLis = $("ul.documentary-sort li");
        documentarySortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            documentarySortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });


    rooter.$watch("happyLife", function () {
        rooter.currentChannel = "happyLife";
        commonAjax();

        let happyLifeKindLis = $("ul.happyLife-kind li");
        happyLifeKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            happyLifeKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let happyLifeSortLis = $("ul.happyLife-sort li");
        happyLifeSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            happyLifeSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });

    rooter.$watch("news", function () {
        rooter.currentChannel = "news";
        commonAjax();

        let newsKindLis = $("ul.news-kind li");
        newsKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            newsKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let newsSortLis = $("ul.news-sort li");
        newsSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            newsSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });


    rooter.$watch("enterment", function () {
        rooter.currentChannel = "enterment";
        commonAjax();

        let entermentKindLis = $("ul.enterment-kind li");
        entermentKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            entermentKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let entermentSortLis = $("ul.enterment-sort li");
        entermentSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            entermentSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });


    rooter.$watch("education", function () {
        rooter.currentChannel = "education";
        commonAjax();

        let educationKindLis = $("ul.education-kind li");
        educationKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            educationKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let educationSortLis = $("ul.education-sort li");
        educationSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            educationSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });


    rooter.$watch("game", function () {
        rooter.currentChannel = "game";
        commonAjax();

        let gameKindLis = $("ul.game-kind li");
        gameKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            gameKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let gameSortLis = $("ul.game-sort li");
        gameSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            gameSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });


    rooter.$watch("sport", function () {
        rooter.currentChannel = "sport";
        commonAjax();

        let sportKindLis = $("ul.sport-kind li");
        sportKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            sportKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let sportSortLis = $("ul.sport-sort li");
        sportSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            sportSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });

    rooter.$watch("origin", function () {
        rooter.currentChannel = "origin";
        commonAjax();

        let originKindLis = $("ul.origin-kind li");
        originKindLis.unbind().click(function () {
            rooter.kindSelected = $(this).find("span").attr("kind");
            originKindLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });

        let originSortLis = $("ul.origin-sort li");
        originSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            originSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
            pageIndex = 0;
        });
    });

    function commonAjax() {
        rooter.pageIndexSelected = 0;
        $.ajax({
            type: "GET",
            url: "/metv/listPcWeb?platform="+rooter.platformSelected+"&channelId="+rooter.channelIdSelected+"&pageIndex="+rooter.pageIndexSelected+"&pageSize="+rooter.pageSizeSelected+"&hudong="+rooter.hudongSelected+"&_support="+rooter.supportSelected+"&kind="+rooter.kindSelected+"&area="+rooter.areaSelected+"&sort="+rooter.sortSelected+"&abroad="+rooter.abroadSelected+"&src="+rooter.srcSelected + "&year=" + rooter.yearSelected + "&edition=" + rooter.editionSelected + "&chargeInfo=" + rooter.chargeInfoSelected + "&fitAge=" + rooter.fitAgeSelected + "&musicStyle=" + rooter.musicStyleSelected,
            dataType: "json",
            success: function (data) {
                rooter.videoList = data.data.hitDocs;
            }
        });
    }


    $(window).scroll(function () {
        if ($(document).scrollTop() >= ($(document).height() - $(window).height()) * 0.95) {
            pageIndex++;
            $.ajax({
                type: "GET",
                url: "/metv/listPcWeb?platform="+rooter.platformSelected+"&channelId="+rooter.channelIdSelected+"&pageIndex="+pageIndex+"&pageSize="+rooter.pageSizeSelected+"&hudong="+rooter.hudongSelected+"&_support="+rooter.supportSelected+"&kind="+rooter.kindSelected+"&area="+rooter.areaSelected+"&sort="+rooter.sortSelected+"&abroad="+rooter.abroadSelected+"&src="+rooter.srcSelected + "&year=" + rooter.yearSelected + "&edition=" + rooter.editionSelected + "&chargeInfo=" + rooter.chargeInfoSelected + "&fitAge=" + rooter.fitAgeSelected + "&musicStyle=" + rooter.musicStyleSelected,
                dataType: "json",
                success: function (data) {
                    let videoList = data.data.hitDocs;
                    for (let i = 0; i < videoList.length; i++) {
                        rooter.videoList.push(videoList[i]);
                    }
                }
            });
        }
    });

    function readVarietyConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/variety-config.json",
            dataType: "json",
            success: function (data) {
                rooter.variety = data["综艺"];
                rooter.varietyKind = rooter.variety.kind;
                rooter.varietyArea = rooter.variety.area;
                rooter.varietySort = rooter.variety.sort;
                rooter.varietyKindCurrentIndex = 1;
                rooter.varietyAreaCurrentIndex = 1;
                rooter.varietySortCurrentIndex = 1;
                //重置数据
                rooter.currentChannel = "variety";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "1";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.varietyKind[rooter.varietyKindCurrentIndex - 1][1];
                rooter.areaSelected = rooter.varietyArea[rooter.varietyAreaCurrentIndex - 1][1];
                rooter.sortSelected = rooter.varietySort[rooter.varietySortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }

    function readTvConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/tv-config.json",
            dataType: "json",
            success: function (data) {
                rooter.tv = data["电视剧"];
                rooter.tvKind = rooter.tv.kind;
                rooter.tvArea = rooter.tv.area;
                rooter.tvYear = rooter.tv.year;
                rooter.tvSort = rooter.tv.sort;
                rooter.tvEdition = rooter.tv.edition;
                rooter.tvChargeInfo = rooter.tv.chargeInfo;
                rooter.tvKindCurrentIndex = 1;
                rooter.tvAreaCurrentIndex = 1;
                rooter.tvYearCurrentIndex = 1;
                rooter.tvSortCurrentIndex = 1;
                rooter.tvEditionCurrentIndex = 1;
                rooter.tvChargeInfoCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "tv";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "2";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.tvKind[rooter.tvKindCurrentIndex - 1][1];
                rooter.areaSelected = rooter.tvArea[rooter.tvAreaCurrentIndex - 1][1];
                rooter.sortSelected = rooter.tvSort[rooter.tvSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = rooter.tvYear[rooter.tvYearCurrentIndex - 1][1];
                rooter.editionSelected = rooter.tvEdition[rooter.tvEditionCurrentIndex - 1][1];
                rooter.chargeInfoSelected = rooter.tvChargeInfo[rooter.tvChargeInfoCurrentIndex - 1][1];
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }

    function readMovieConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/movie-config.json",
            dataType: "json",
            success: function (data) {
                rooter.movie = data["电影"];
                rooter.movieKind = rooter.movie.kind;
                rooter.movieArea = rooter.movie.area;
                rooter.movieYear = rooter.movie.year;
                rooter.movieSort = rooter.movie.sort;
                rooter.movieEdition = rooter.movie.edition;
                rooter.movieChargeInfo = rooter.movie.chargeInfo;
                rooter.movieKindCurrentIndex = 1;
                rooter.movieAreaCurrentIndex = 1;
                rooter.movieYearCurrentIndex = 1;
                rooter.movieSortCurrentIndex = 1;
                rooter.movieEditionCurrentIndex = 1;
                rooter.movieChargeInfoCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "movie";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "3";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.movieKind[rooter.movieKindCurrentIndex - 1][1];
                rooter.areaSelected = rooter.movieArea[rooter.movieAreaCurrentIndex - 1][1];
                rooter.sortSelected = rooter.movieSort[rooter.movieSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = rooter.movieYear[rooter.movieYearCurrentIndex - 1][1];
                rooter.editionSelected = rooter.movieEdition[rooter.movieEditionCurrentIndex - 1][1];
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }


    function readChildConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/child-config.json",
            dataType: "json",
            success: function (data) {
                rooter.child = data["少儿"];
                rooter.childKind = rooter.child.kind;
                rooter.childArea = rooter.child.area;
                rooter.childYear = rooter.child.year;
                rooter.childSort = rooter.child.sort;
                rooter.childEdition = rooter.child.edition;
                rooter.childChargeInfo = rooter.child.chargeInfo;
                rooter.childFitAge = rooter.child.fitAge;
                rooter.childKindCurrentIndex = 1;
                rooter.childAreaCurrentIndex = 1;
                rooter.childYearCurrentIndex = 1;
                rooter.childSortCurrentIndex = 1;
                rooter.childEditionCurrentIndex = 1;
                rooter.childChargeInfoCurrentIndex = 1;
                rooter.childFitAgeCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "child";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "10";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.childKind[rooter.childKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = "";
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = rooter.childFitAge[rooter.childFitAgeCurrentIndex - 1][1];
                rooter.musicStyleSelected = "";
            }
        });
    }

    function readMusicConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/music-config.json",
            dataType: "json",
            success: function (data) {
                rooter.music = data["音乐"];
                rooter.musicKind = rooter.music.kind;
                rooter.musicArea = rooter.music.area;
                rooter.musicYear = rooter.music.year;
                rooter.musicSort = rooter.music.sort;
                rooter.musicEdition = rooter.music.edition;
                rooter.musicChargeInfo = rooter.music.chargeInfo;
                rooter.musicFitAge = rooter.music.fitAge;
                rooter.musicMusicStyle = rooter.music.musicStyle;
                rooter.musicKindCurrentIndex = 1;
                rooter.musicAreaCurrentIndex = 1;
                rooter.musicYearCurrentIndex = 1;
                rooter.musicSortCurrentIndex = 1;
                rooter.musicEditionCurrentIndex = 1;
                rooter.musicChargeInfoCurrentIndex = 1;
                rooter.musicFitAgeCurrentIndex = 1;
                rooter.musicMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "music";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "20";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.musicKind[rooter.musicKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = rooter.musicSort[rooter.musicSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = rooter.musicMusicStyle[rooter.musicMusicStyleCurrentIndex - 1][1];
            }
        });
    }

    function readComicConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/comic-config.json",
            dataType: "json",
            success: function (data) {
                rooter.comic = data["动漫"];
                rooter.comicKind = rooter.comic.kind;
                rooter.comicArea = rooter.comic.area;
                rooter.comicYear = rooter.comic.year;
                rooter.comicSort = rooter.comic.sort;
                rooter.comicEdition = rooter.comic.edition;
                rooter.comicChargeInfo = rooter.comic.chargeInfo;
                rooter.comicFitAge = rooter.comic.fitAge;
                rooter.comicMusicStyle = rooter.comic.comicStyle;
                rooter.comicKindCurrentIndex = 1;
                rooter.comicAreaCurrentIndex = 1;
                rooter.comicYearCurrentIndex = 1;
                rooter.comicSortCurrentIndex = 1;
                rooter.comicEditionCurrentIndex = 1;
                rooter.comicChargeInfoCurrentIndex = 1;
                rooter.comicFitAgeCurrentIndex = 1;
                rooter.comicMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "comic";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "50";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.comicKind[rooter.comicKindCurrentIndex - 1][1];
                rooter.areaSelected = rooter.comicArea[rooter.comicAreaCurrentIndex - 1][1];
                rooter.sortSelected = rooter.comicSort[rooter.comicSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = rooter.comicEdition[rooter.comicEditionCurrentIndex - 1][1];
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }


    function readDocumentaryConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/documentary-config.json",
            dataType: "json",
            success: function (data) {
                rooter.documentary = data["纪录片"];
                rooter.documentaryKind = rooter.documentary.kind;
                rooter.documentaryArea = rooter.documentary.area;
                rooter.documentaryYear = rooter.documentary.year;
                rooter.documentarySort = rooter.documentary.sort;
                rooter.documentaryEdition = rooter.documentary.edition;
                rooter.documentaryChargeInfo = rooter.documentary.chargeInfo;
                rooter.documentaryFitAge = rooter.documentary.fitAge;
                rooter.documentaryMusicStyle = rooter.documentary.musicStyle;
                rooter.documentaryKindCurrentIndex = 1;
                rooter.documentaryAreaCurrentIndex = 1;
                rooter.documentaryYearCurrentIndex = 1;
                rooter.documentarySortCurrentIndex = 1;
                rooter.documentaryEditionCurrentIndex = 1;
                rooter.documentaryChargeInfoCurrentIndex = 1;
                rooter.documentaryFitAgeCurrentIndex = 1;
                rooter.documentaryMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "documentary";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "51";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.documentaryKind[rooter.documentaryKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = rooter.documentarySort[rooter.documentarySortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }

    function readHappyLifeConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/happyLife-config.json",
            dataType: "json",
            success: function (data) {
                rooter.happyLife = data["乐活"];
                rooter.happyLifeKind = rooter.happyLife.kind;
                rooter.happyLifeArea = rooter.happyLife.area;
                rooter.happyLifeYear = rooter.happyLife.year;
                rooter.happyLifeSort = rooter.happyLife.sort;
                rooter.happyLifeEdition = rooter.happyLife.edition;
                rooter.happyLifeChargeInfo = rooter.happyLife.chargeInfo;
                rooter.happyLifeFitAge = rooter.happyLife.fitAge;
                rooter.happyLifeMusicStyle = rooter.happyLife.musicStyle;
                rooter.happyLifeKindCurrentIndex = 1;
                rooter.happyLifeAreaCurrentIndex = 1;
                rooter.happyLifeYearCurrentIndex = 1;
                rooter.happyLifeSortCurrentIndex = 1;
                rooter.happyLifeEditionCurrentIndex = 1;
                rooter.happyLifeChargeInfoCurrentIndex = 1;
                rooter.happyLifeFitAgeCurrentIndex = 1;
                rooter.happyLifeMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "happyLife";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "105";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.happyLifeKind[rooter.happyLifeKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = rooter.happyLifeSort[rooter.happyLifeSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }

    function readNewsConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/news-config.json",
            dataType: "json",
            success: function (data) {
                rooter.news = data["新闻"];
                rooter.newsKind = rooter.news.kind;
                rooter.newsArea = rooter.news.area;
                rooter.newsYear = rooter.news.year;
                rooter.newsSort = rooter.news.sort;
                rooter.newsEdition = rooter.news.edition;
                rooter.newsChargeInfo = rooter.news.chargeInfo;
                rooter.newsFitAge = rooter.news.fitAge;
                rooter.newsMusicStyle = rooter.news.musicStyle;
                rooter.newsKindCurrentIndex = 1;
                rooter.newsAreaCurrentIndex = 1;
                rooter.newsYearCurrentIndex = 1;
                rooter.newsSortCurrentIndex = 1;
                rooter.newsEditionCurrentIndex = 1;
                rooter.newsChargeInfoCurrentIndex = 1;
                rooter.newsFitAgeCurrentIndex = 1;
                rooter.newsMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "news";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "106";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.newsKind[rooter.newsKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = rooter.newsSort[rooter.newsSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }

    function readEntermentConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/enterment-config.json",
            dataType: "json",
            success: function (data) {
                rooter.enterment = data["娱乐"];
                rooter.entermentKind = rooter.enterment.kind;
                rooter.entermentArea = rooter.enterment.area;
                rooter.entermentYear = rooter.enterment.year;
                rooter.entermentSort = rooter.enterment.sort;
                rooter.entermentEdition = rooter.enterment.edition;
                rooter.entermentChargeInfo = rooter.enterment.chargeInfo;
                rooter.entermentFitAge = rooter.enterment.fitAge;
                rooter.entermentMusicStyle = rooter.enterment.musicStyle;
                rooter.entermentKindCurrentIndex = 1;
                rooter.entermentAreaCurrentIndex = 1;
                rooter.entermentYearCurrentIndex = 1;
                rooter.entermentSortCurrentIndex = 1;
                rooter.entermentEditionCurrentIndex = 1;
                rooter.entermentChargeInfoCurrentIndex = 1;
                rooter.entermentFitAgeCurrentIndex = 1;
                rooter.entermentMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "enterment";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "113";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.entermentKind[rooter.entermentKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = rooter.entermentSort[rooter.entermentSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }


    function readEducationConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/education-config.json",
            dataType: "json",
            success: function (data) {
                rooter.education = data["教育"];
                rooter.educationKind = rooter.education.kind;
                rooter.educationArea = rooter.education.area;
                rooter.educationYear = rooter.education.year;
                rooter.educationSort = rooter.education.sort;
                rooter.educationEdition = rooter.education.edition;
                rooter.educationChargeInfo = rooter.education.chargeInfo;
                rooter.educationFitAge = rooter.education.fitAge;
                rooter.educationMusicStyle = rooter.education.musicStyle;
                rooter.educationKindCurrentIndex = 1;
                rooter.educationAreaCurrentIndex = 1;
                rooter.educationYearCurrentIndex = 1;
                rooter.educationSortCurrentIndex = 1;
                rooter.educationEditionCurrentIndex = 1;
                rooter.educationChargeInfoCurrentIndex = 1;
                rooter.educationFitAgeCurrentIndex = 1;
                rooter.educationMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "education";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "115";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.educationKind[rooter.educationKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = rooter.educationSort[rooter.educationSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }

    function readGameConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/game-config.json",
            dataType: "json",
            success: function (data) {
                rooter.game = data["游戏"];
                rooter.gameKind = rooter.game.kind;
                rooter.gameArea = rooter.game.area;
                rooter.gameYear = rooter.game.year;
                rooter.gameSort = rooter.game.sort;
                rooter.gameEdition = rooter.game.edition;
                rooter.gameChargeInfo = rooter.game.chargeInfo;
                rooter.gameFitAge = rooter.game.fitAge;
                rooter.gameMusicStyle = rooter.game.musicStyle;
                rooter.gameKindCurrentIndex = 1;
                rooter.gameAreaCurrentIndex = 1;
                rooter.gameYearCurrentIndex = 1;
                rooter.gameSortCurrentIndex = 1;
                rooter.gameEditionCurrentIndex = 1;
                rooter.gameChargeInfoCurrentIndex = 1;
                rooter.gameFitAgeCurrentIndex = 1;
                rooter.gameMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "game";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "116";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.gameKind[rooter.gameKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = rooter.gameSort[rooter.gameSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }

    function readSportConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/sport-config.json",
            dataType: "json",
            success: function (data) {
                rooter.sport = data["体育"];
                rooter.sportKind = rooter.sport.kind;
                rooter.sportArea = rooter.sport.area;
                rooter.sportYear = rooter.sport.year;
                rooter.sportSort = rooter.sport.sort;
                rooter.sportEdition = rooter.sport.edition;
                rooter.sportChargeInfo = rooter.sport.chargeInfo;
                rooter.sportFitAge = rooter.sport.fitAge;
                rooter.sportMusicStyle = rooter.sport.musicStyle;
                rooter.sportKindCurrentIndex = 1;
                rooter.sportAreaCurrentIndex = 1;
                rooter.sportYearCurrentIndex = 1;
                rooter.sportSortCurrentIndex = 1;
                rooter.sportEditionCurrentIndex = 1;
                rooter.sportChargeInfoCurrentIndex = 1;
                rooter.sportFitAgeCurrentIndex = 1;
                rooter.sportMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "sport";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "117";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.sportKind[rooter.sportKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = rooter.sportSort[rooter.sportSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }

    function readOriginConfig() {
        $.ajax({
            type: "GET",
            url: "/static/config/metv/origin-config.json",
            dataType: "json",
            success: function (data) {
                rooter.origin = data["原创"];
                rooter.originKind = rooter.origin.kind;
                rooter.originArea = rooter.origin.area;
                rooter.originYear = rooter.origin.year;
                rooter.originSort = rooter.origin.sort;
                rooter.originEdition = rooter.origin.edition;
                rooter.originChargeInfo = rooter.origin.chargeInfo;
                rooter.originFitAge = rooter.origin.fitAge;
                rooter.originMusicStyle = rooter.origin.musicStyle;
                rooter.originKindCurrentIndex = 1;
                rooter.originAreaCurrentIndex = 1;
                rooter.originYearCurrentIndex = 1;
                rooter.originSortCurrentIndex = 1;
                rooter.originEditionCurrentIndex = 1;
                rooter.originChargeInfoCurrentIndex = 1;
                rooter.originFitAgeCurrentIndex = 1;
                rooter.originMusicStyleCurrentIndex = 1;

                //重置数据
                rooter.currentChannel = "origin";
                rooter.platformSelected = "pcweb";
                rooter.channelIdSelected = "111";
                rooter.pageIndexSelected = "1";
                rooter.pageSizeSelected = "80";
                rooter.hudongSelected = "1";
                rooter.supportSelected = "10000000";
                rooter.kindSelected = rooter.originKind[rooter.originKindCurrentIndex - 1][1];
                rooter.areaSelected = "";
                rooter.sortSelected = rooter.originSort[rooter.originSortCurrentIndex - 1][1];
                rooter.abroadSelected = "";
                rooter.srcSelected = "";
                rooter.yearSelected = "";
                rooter.editionSelected = "";
                rooter.chargeInfoSelected = "";
                rooter.fitAgeSelected = "";
                rooter.musicStyleSelected = "";
            }
        });
    }

});