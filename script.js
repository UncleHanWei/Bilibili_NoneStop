const video = document.querySelector("video");
const myPause = document.querySelector("video").pause;
const myPlay = document.querySelector("video").play;
// 把原本的暫停函數覆蓋掉，讓原本的暫停無法執行，就不會被暫停了
video.pause = () => { }
video.myPause = myPause;
video.play = () => { }
video.myPlay = myPlay;
let isPaused = video.paused;
const sleep = (ms) => { return new Promise(rs => setTimeout(() => rs(), ms)); }

const pauseOrPlayVideo = async () => {
  video.paused ? video.myPlay() : video.myPause();
}

// 一開始先直接開始播放
video.myPlay();

// 把使用者操作的暫停補回去
window.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    pauseOrPlayVideo();
  }
});

video.addEventListener("click", (e) => {
  pauseOrPlayVideo()
})



// create an observer instance
let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length == 0) {
      return
    }

    let node = mutation.addedNodes[0];
    // console.log(mutation.addedNodes);
    if (node.classList == undefined) {
      return
    }

    if (node.classList.contains("bpx-player-ctrl-play")) {
      node.addEventListener("click", (e) => {
        pauseOrPlayVideo();
      })
    }

    if (node.classList.contains("bili-mini-mask")) {
      console.log("抓到你了~ψ(｀∇´)ψ");
        mutation.addedNodes[0].style.display = 'none';
    }
  });
});

// configuration of the observer:
let config = { childList: true, subtree: true };

// pass in the target node, as well as the observer options
observer.observe(document.querySelector('body'), config);