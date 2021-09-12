function openImage(event){
    var source = event.currentTarget.getElementsByTagName("img")[0].getAttribute('src')
    document.getElementById("img_ampliada").src = source
    document.getElementById('tela_img_aplicada').classList = []
}
function closeImage(){
    document.getElementById('tela_img_aplicada').classList = ['invisible']
}