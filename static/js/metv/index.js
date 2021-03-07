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
        });

        let varietyAreaLis = $("ul.variety-area li");
        varietyAreaLis.unbind().click(function () {
            rooter.areaSelected = $(this).find("span").attr("area");
            varietyAreaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let varietySortLis = $("ul.variety-sort li");
        varietySortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            varietySortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
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
        });

        let tvAreaLis = $("ul.tv-area li");
        tvAreaLis.unbind().click(function () {
            rooter.areaSelected = $(this).find("span").attr("area");
            tvAreaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let tvYearLis = $("ul.tv-year li");
        tvYearLis.unbind().click(function () {
            rooter.yearSelected = $(this).find("span").attr("year");
            tvYearLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let tvSortLis = $("ul.tv-sort li");
        tvSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            tvSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let tvEditionLis = $("ul.tv-edition li");
        tvEditionLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("edition");
            tvEditionLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let tvChargeInfoLis = $("ul.tv-chargeInfo li");
        tvChargeInfoLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("chargeInfo");
            tvChargeInfoLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
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
        });

        let movieAreaLis = $("ul.movie-area li");
        movieAreaLis.unbind().click(function () {
            rooter.areaSelected = $(this).find("span").attr("area");
            movieAreaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let movieYearLis = $("ul.movie-year li");
        movieYearLis.unbind().click(function () {
            rooter.yearSelected = $(this).find("span").attr("year");
            movieYearLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let movieSortLis = $("ul.movie-sort li");
        movieSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            movieSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let movieEditionLis = $("ul.movie-edition li");
        movieEditionLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("edition");
            movieEditionLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let movieChargeInfoLis = $("ul.movie-chargeInfo li");
        movieChargeInfoLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("chargeInfo");
            movieChargeInfoLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
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
        });

        let childFitAgeLis = $("ul.child-fitAge li");
        childFitAgeLis.unbind().click(function () {
            rooter.areaSelected = $(this).find("span").attr("fitAge");
            childFitAgeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
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
        });

        let musicMusicStyleLis = $("ul.music-musicStyle li");
        musicMusicStyleLis.unbind().click(function () {
            rooter.musicStyleSelected = $(this).find("span").attr("musicStyle");
            musicMusicStyleLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let musicSortLis = $("ul.music-sort li");
        musicSortLis.unbind().click(function () {
            rooter.sortSelected = $(this).find("span").attr("sort");
            musicSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });


    function commonAjax() {
        rooter.pageIndexSelected = 0;
        $.ajax({
            type: "GET",
            url: "/metv/listPcWeb?platform="+rooter.platformSelected+"&channelId="+rooter.channelIdSelected+"&pn="+rooter.pageIndexSelected+"&pc="+rooter.pageSizeSelected+"&hudong="+rooter.hudongSelected+"&_support="+rooter.supportSelected+"&kind="+rooter.kindSelected+"&area="+rooter.areaSelected+"&sort="+rooter.sortSelected+"&abroad="+rooter.abroadSelected+"&src="+rooter.srcSelected + "&year=" + rooter.yearSelected + "&edition=" + rooter.editionSelected + "&chargeInfo=" + rooter.chargeInfoSelected + "&fitAge=" + rooter.fitAgeSelected + "&musicStyle=" + rooter.musicStyleSelected,
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
});