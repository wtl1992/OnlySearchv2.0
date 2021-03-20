$(function () {
    let keyword = $("input#keyword").attr("title");

    Vue.use(VueLazyload, {
        error: '/static/images/bg.gif',
        loading: '/static/images/bg.gif'
    });

    let pageIndex = 0;
    let channelIds = [
        1,2,3,10,20,50,51,105,106,113,115,116,117,111
    ];
    let rooter = new Vue({
        el: "#rooter",
        data: function () {
            return {
                videoList: null
            };
        },
        created: function () {
            $.ajax({
                type: "GET",
                url: "/metv/queryByKeyword/" + keyword,
                dataType: "json",
                success: function (data) {
                    console.dir(data)
                    for (let i=0;i<data.length;i++){
                        let dat = data[i];
                        switch (dat.channelId) {
                            case 1:
                            case 51:
                            case 105:
                            case 106:
                            case 113:
                            case 115:
                            case 116:
                            case 117:
                            case 111:
                                dat.href = "/metv/showDocumentary?url=https://www.mgtv.com/b/"  + dat.clipId + "/" + dat.playPartId +  ".html?lastp=list_index&name=" + dat.title;
                                break;
                            case 2:
                            case 10:
                            case 50:
                                dat.href = "/tv/showTv?url=https://www.mgtv.com/b/" + dat.clipId + "/" + dat.playPartId + ".html?lastp=list_index&name=" + dat.title;
                                break;
                            case 3:
                            case 20:
                                dat.href = "/play/playMovieWithThreePart?url=https://www.mgtv.com/b/"  + dat.clipId + "/" + dat.playPartId + ".html?lastp=list_index&name=" + dat.title;
                                break;
                            default:
                                break;
                        }
                    }
                    rooter.videoList = data;
                }
            });
        }
    });

    $("input").unbind().keyup(function (event) {
        if (event.keyCode === 13 && $(this).val() !== ""){
            $("a.searchButton").get(0).click();
        }
    });

    $("a.searchButton").unbind().click(function () {
        $(this).attr("href","/metv/searchResultPage/"+$("input").val());
    });
});