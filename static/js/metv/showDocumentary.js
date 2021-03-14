$(function () {
    let url = $("#url").attr("url");

    let rooter = new Vue({
        el : "#rooter",
        data : ()=>{
            return {
                tvPlayList : []
            };
        },
        created : ()=>{
            let splits = url.split(".")[2].split("/");
            let cid = splits[2];
            let vid = splits[3];
            $.ajax({
                type: "GET",
                url: "/metv/getDocumentaryList/" + vid + "/" + cid,
                dataType: "json",
                success: function (data) {
                    rooter.tvPlayList = [data];
                }
            });
        }
    });

    rooter.$watch("tvPlayList",function () {
        let lis = $("ul.innerItem li");
        let iframe = $("iframe");
        lis.unbind().click(function () {
            lis.removeClass("focus");

            $(this).addClass("focus");

            iframe.attr("src","https://www.2ajx.com/vip.php?url="+$(this).attr("url"));
        });

        //初始化
        iframe.attr("src","https://www.2ajx.com/vip.php?url="+lis.eq(0).attr("url"));
        lis.eq(0).addClass("focus");
    });
});