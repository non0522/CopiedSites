'use strict';

{
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        console.log('submit');
    });
}
{
    const text =document.querySelector('textarea');

    // text.addEventListener('focus', () => {
    //     console.log('focus');
    // });

    // text.addEventListener('blur', () => {
    //     console.log('blur');
    // });

    text.addEventListener('input', () => {
        // console.log('input');
        console.log(text.value.length);
    });
    text.addEventListener('change', () => {
        console.log('change');
    });
}
{
    document.querySelector('button').addEventListener('dblclick', () => {
        console.log('Double Clicked!');
    });

    document.addEventListener('mousemove', e => {
        console.log(e.clientX, e.clientY);
    });

    document.addEventListener('keydown', e => {
        console.log(e.key);
    });
}

{
    document.querySelector('button').addEventListener('click', () => {
        const colors = document.querySelectorAll('input');
        const selectedColors = []

        colors.forEach(color => {
            if (color.checked === true) {
                selectedColors.push(color.value);
            }
        });

        const li = document.createElement('li');
        li.textContent = selectedColors.join(',');
        document.querySelector('ul').appendChild(li);
    });

}
{
    document.querySelector('button').addEventListener('click', () => {
        const colors = document.querySelectorAll('input');
        let selectedColor;

        colors.forEach(color => {
            if (color.checked === true) {
                selectedColor = color.value;
            }
        });
        const li = document.createElement('li');
        li.textContent = selectedColor;
        document.querySelector('ul').appendChild(li);
    });
}
{
    document.querySelector('button').addEventListener('click',() => {
        const li = document.createElement('li');
        const color = document.querySelector('select');

        li.textContent = `${color.value} - ${color.selectedIndex}`;
        document.querySelector('ul').appendChild(li);
    });
}

{
    document.querySelector('button').addEventListener('click',() => {
        const li = document.createElement('li');
        const text =document.querySelector('input');
        li.textContent =text.value;
        document.querySelector('ul').appendChild(li);

        text.value = '';
        text.focus();
    });
}
{
    document.querySelector('button').addEventListener('click', () => {
        const item0 =document.querySelectorAll('li')[0];
        const copy = item0.cloneNode(true);

        const ul = document.querySelector('ul');
        const item2 = document.querySelectorAll('li')[2];
        ul.insertBefore(copy,item2);
    })
}
{
    document.querySelector('button').addEventListener('click', () => {
        const item2 =document.createElement('li');
        item2.textContent = 'item2';

        const ulNode = document.querySelector('ul');
        ulNode.appendChild(item2);
        
        const targetNode =document.getElementById('target');

        // targetNode.textContent = 'Dotinstall';
        targetNode.textContent = targetNode.dataset.translation;
    })
}

{
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        // targetNode.className = 'my-color my-border';
        // targetNode.classList.add('my-color');

        // if (targetNode.classList.contains('my-color') === true) {
        //     targetNode.classList.remove('my-color');
        // } else {
        //     targetNode.classList.add('my-color');
        // }
        targetNode.classList.toggle('my-color');

        });
}

{
    function update() {
        // document.getElementById('target').textContent = 'Changed!';
        // document.querySelectorAll('p')[1].textContent = 'Changed!';
        document.querySelectorAll('p').forEach((p, index) => {
            p.textContent = `${index}番目のpです！`;
        })
    }

    setTimeout(update,1000);

}

{
    class Post{ //親クラス
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }
        show() {
            console.log(`${this.text} - ${this.likeCount} likes`);
        }

        like() {
            this.likeCount++;
            this.show();
        }

        static showInfo() {
            console.log('なんでも良いから呼び出して！');

        }
    }

    class SponsoredPost extends Post{ //子クラス
        constructor(text, sponsor) {
            super(text);
            this.sponsor = sponsor;
        }
        show() {
            super.show();
            console.log(`... sponsored by ${this.sponsor}`);
        }
    }

    const posts = [
        new Post('JavaScriptの勉強中・・・'),
        new Post('プログラミング楽しい！'),
        new SponsoredPost('3分動画でマスターしよう', 'dotinstall')
    ];

    // posts[0].like();
    // Post.showInfo();
    posts[2].show();
    posts[2].like();


}

{
    const posts = [
        {
            text: 'JavaScriptの勉強中・・・',
            likeCount: 0,
            show() {
                console.log(`${this.text} - ${this.likeCount}いいね`)
            }
            // このshowというkeyのことをメソットという
        
        },
        {
            text: 'プログラミング楽しい！',
            likeCount: 0,
        },
    ];


    // show(posts[0]);
    posts[0].show();

}

{
    const posts = [
        {
            text: 'JavaScriptの勉強中・・・',
            likeCount: 0,
        },
        {
            text: 'プログラミング楽しい！',
            likeCount: 0,
        },
    ];

    function show(post) {
        console.log(`${post.text} - ${post.likeCount}いいね`)
    }

    show(posts[0]);
    show(posts[1]);

}


// 例外処理
// ユーザーから名前を受け取って、それを大文字にする→toUpperCaseは文字列にしか使えない

{
    const name = 5;

    // ここから例外処理 tryで記載
    try {
        console.log(name.toUpperCase());
    } catch (e) {
        console.log(e);
    }
    // エラーの引数はよくeが使われる

    console.log('Finish!');
}
{
    let i = 0;


    function showTime() {
        console.log(new Date());
        const timeoutId = setTimeout(showTime,1000);
        i++;
        if (i > 2) {
            clearTimeout(timeoutId);
        }
    }

    showTime();

}
{
    let i = 0;

    function showTime() {
        console.log(new Date());
        i++;
        if (i > 2 ){
            clearInterval(intervalID);
        }
    }

    const intervalID = setInterval(showTime, 1000);
}

{
    // alert('hello');

    const answer = confirm('削除しますか？');
    if (answer) {
        console.log('削除しました');
    } else {
        console.log('キャンセルしました');
    }
}
{
    const d = new Date(2021, 6);
    d.setHours(10, 20, 30);
    d.setDate(d.getDate() + 3);
    console.log(d);
}
{
    const d = new Date ();
    console.log(d);

    console.log(`${d.getMonth() + 1 } 月`);
    console.log(`${d.getDate()} 日`);
    console.log(`${d.getDay() + 1} 曜日`);
    console.log(`${d.getHours()} 時`);
    console.log(`${d.getMinutes()} 分`)
    console.log(`${d.getSeconds()} 秒`)


}

{
    const n = 1
    console.log(Math.floor(Math.random() * (6 + 1 - 3)) + 3);
}
// 0.4 * 6 = 2.4 + 1 = 3.4
// 0.9 * 6 = 5.4
// 0.8 * 6 = 4.8
// 0.1 * 6 = 0.6

// 0.4 * 4 = 1.6 + 3 = 4.6
// 0.9 * 4 = 3.6 + 3 = 6.6
// 0.8 * 4 = 3.2 + 3 = 6.2
// 0.1 * 4 = 0.4 + 3 = 3.4



{
    const scores =[10, 3, 9];
    // この数値の合計と平均を求めたい

    let sum = 0;
    // 最初にsumという変数を定義

    scores.forEach(score => {
        sum += score;
        // scoresそれぞれの値にscoreを定義
        // sumにscoreの値を足していく
    });

    const avg = sum / scores.length;
    // sumをscoresの数で割っていく

    // console.log(sum);
    // console.log(avg);

    console.log(Math.random());

} 

{
    const d = [2019, 11, 14];

    console.log(d.join('/'));

    const t = '17:08:24';
    // console.log(t.split('1'));

    const [hour, minute, second] = t.split(':');
    console.log(hour);
    console.log(minute);
    console.log(second);
}
{
    const str = 'hello';
    // console.log(str.length);

    // str.substring(開始位置, 終了位置);
    // console.log(str.substring(1, 3));

    console.log(str[1]);
}

{
    // let x = 1;
    // let y = x;
    // x = 5;
    // console.log(x);
    // console.log(y);
    // 変数xを1と定義
    // 変数yをxと定義
    // xを5に変更

    let x = [1, 2];
    let y = [...x];
    x[0] = 5;
    console.log(x);
    console.log(y);
}
{
    const point = {
        x: 100, 
        y: 180,
    };

    const keys = Object.keys(point);
    keys.forEach(key => {
        console.log(`Key: ${key} Value: ${point[key]}`);
    });

    const points = [
        {x: 30, y: 20},
        {x: 10, y: 50},
        {x: 30, y: 40},
    ];
    console.log(points[1].y);
}



const otherProps = {
    r: 4,
    color: 'red',
};

const point = {
    x: 100,
    y: 180,
    ...otherProps,
};
// console.log(point);

const {x, r, ...others} = point;
console.log(x);
console.log(r);
console.log(others);




// Object
// あたいに名前をつけて管理できる

{
    const point = {
        x: 100,
        y: 180,
    };

    point.x = 120;
    // point['x'] = 120;

    // console.log(point.x); 
    // console.log(point['y']); 
    
    point.z = 90;
    delete point.y;
    console.log(point);
}
// filter
// 配列の要素をチェックして、条件に合うものだけをチェックして、別の配列として抽出できる

{
    const numbers =[1, 4, 7, 8, 10];

    // const evenNumbeers = numbers.filter(number => {
    //     // evenNumbeersを定義して、numbersにfilterをかけて新しくnumberを以下の処理で取得します。
    //     if (number % 2 === 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
    const evenNumbeers = numbers.filter(number => number % 2 === 0);
        // numberが偶数のものを返す
        // if (number % 2 === 0) {
        //     return true;
        // } else {
        //     return false;
        // }

    console.log(evenNumbeers);
}

// map 配列に何らかの処理をしてその結果を別の配列としてを取得したい
{
    const prices = [180, 190, 200];

    // const updatePrices = prices.map((price) => {
    //     return price + 20;
    // });
    
    // updatePricesを定義します。各配列の要素はpriceとして次の処理を返します。
    // priceに20をプラスします。

    // 以下、書き換え

    const updatePrices = prices.map(price => price + 20);
    console.log(updatePrices);
}

{
    const scores = [80, 90, 40, 70];

    scores.forEach((score, index, maru, desu) => {
        console.log(`score ${index}: ${score}: ${maru}: ${desu}`)
    });
}

// 分割代入
// 一度定義したものの値をやっぱり別々の定義にしたい！

{
    const scores = [80, 90, 40, 70];

    // const [a, b, c, d] = scores;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    const [a, b, ...others] = scores;
    console.log(a);
    console.log(b);
    console.log(others);

    // 分割代入は値の交換にもよく使われる
    let x = 30;
    let y = 70;
    [x, y] =[y, x];
    console.log(x);
    console.log(y);
}
{
    const otherScores = [10, 20];
    const scores = [80, 90, 40, 70, ...otherScores];

    // スプレッド構文は関数の引数にもよく使われる
    function sum(a, b) {
        console.log( a + b );
    }
    sum(...otherScores);
    // sum( 10, 20);と書いたのと同じ意味
}

{
    const otherScores = [10, 20];
    // const scores = [80, 90, 40, 70, otherScores];
    // この書き方だと
    // [80, 90, 40, 70, Array(2)]
    // 0: 80
    // 1: 90
    // 2: 40
    // 3: 70
    // 4: (2) [10, 20]
    // の表示になる
    const scores = [80, 90, 40, 70, ...otherScores];
    // 定数名の前に...を追加してあげると値を追加できる　これをスプレッド構文という
    // [80, 90, 40, 70, 10, 20]

    console.log(scores);
}

{
    const scores = [80, 90, 40, 70];
    scores.splice(1, 1, 40, 50);
    // splice(変化が開始する位置(インデックス1), 削除数(一つ), 追加する要素(40,50), ...)

    for (let i = 0; i < scores.length; i++) {
        console.log(`Score ${i}: ${scores[i]}`);
    }
}

{
    const scores = [80, 90, 40, 70];
    scores.push(60, 50);
    // 定数scoresの値の末尾に値を追加
    scores.shift();
    // 定数scoresの一番目の値を削除　※一つずつしか削除できない

    for (let i = 0; i < scores.length; i++) {
        console.log(`Score ${i}: ${scores[i]}`);
    }
}


{
    const scores = [80, 90, 40, 50, 1, 63,100];

    // console.log(`Score: ${scores[0]}`);
    // console.log(`Score: ${scores[1]}`);
    // console.log(`Score: ${scores[2]}`);

    // for (let i =0; i < 3; i++) {
    for (let i =0; i < scores.length; i++) {
        console.log(`Score ${i}: ${scores[i]}`);
        console.log( 'Score 0', ':', '80')
        // 結果を表示 文字列(Score), scoresのインデックス, scoresの値
    }
}

{
    const scores = [80, 90, 40];
    console.log(scores[1]);

    scores[2] = 44;
    console.log(scores);
    // console定義は再代入できないが...
    // 配列に対しては再代入できる。
    console.log(scores.length);

}

// function sum(a, b, c ) {
//     // console.log( a + b + c );
//     return a + b + c;
// }
// 関数宣言 sumという名前にして引数は(a, b, c)です
// a,b,cを足したものを値として引数に返します。


// const sum = function(a, b, c) {
//     return a + b + c;
// };

// 定数sumは関数宣言の引数(a,b,c)ですよ
// a,b,cを足したものを値として返します

// アロー関数
// 上の式と同じ意味になる
const sum = (a, b, c) => a + b + c;
// 定数sumは引数(a,b,c)を持ちます
// その処理はa,b,cを値として返します

const total = sum(1, 2, 3) + sum(3, 4, 5 );
console.log(total);

// アロー関数は引数が一つの時はもっと省略できる。
const double = function(a) {
    return a * 2;
};
書き換え
const double = a => a*2;
console.log(double(12));


// 関数宣言
// function 関数名(仮引数) {
//     処理；
//     処理；
//     return 戻り値；
// }

// 関数式
// const 定数名 = function(仮引数) {
//     処理；
//     処理；
//     return 戻り値
// }

function sum(a, b, c ) {
    // console.log( a + b + c );
    return a + b + c;
}
// consoleは結果を表示しているだけ。
// 結果を値として返したり場合は、returnを使用！
// 引数はカンマ区切りでいくつでも渡せる


// sum(1, 2, 3);
// sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3,  4, 5 );
console.log(total);

function showAd(message = 'Ad') {
    console.log('--------');
    console.log(`---${message}---`);
    console.log('--------');
}
// 関数functionはshowAdという名前です。
// 処理は以下{}の通りです。console.log()...
// 渡される値を受け取るための変数(message)


showAd('Header Ad');
console.log('Tom is great!');
console.log('Bob is great!');
showAd('Ad');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');

for (let i = 1; i <= 10; i++){
    // if (i === 4 ) {
    // }
    if ( i % 3 === 0 ) {
        continue;
    }
    console.log(i);
}

// for = ループ処理
// 変数iは1,iは10以下までで、1ずつ増やしていく。
// もしiが4だったらこの処理をスキップして次のループへ
// breakはループ処理そのものを終了
// let hp = 100;
//  while (hp > 0) {
//      console.log(`${hp} HP left!`);
//      hp -=15;
//  }

// 変数hpは100です
// hpが0以上の間(while)次の表示をしてね
// hpを15ずつ減らしていく

let hp = -50;

do {
    console.log(`${hp} HP left!`);
    hp -= 15;
} while (hp > 0);
// while文-->　最初から条件式の評価
// do...while文 -->　繰り返しの処理を一度行ってから、条件式
// 最低１回は繰り返し処理される




for (let i = 1; i <= 10; i++) {
    // console.log('hello!');
    console.log(`hello ${i}`);
    // テンプレートリテラルを使うときはバッククオート
}

// for = ループ処理
// 変数iは1ですよ。iが10以下の時、iを1ずつ増やして次の処理をしてね


const signal = 'black';
// signalをredに定義します

if (signal === 'red') {
    console.log('Stop!');
} else if (signal === 'yellow') {
    console.log('Caution!');
} else if (signal === 'blue') {
    console.log('Go!');
}
// もしsignal = redだったらStop!と表示
// それ以外でもしsignal = yellowだったらCaution!と表示
// それ以外でもしsignal = blueだったらGo!と表示

switch (signal) {
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Caution!');
        break;
    case 'blue':
    case 'green':
        console.log('Go!');
        break;
    default:
        console.log('Wrong signal!')
        break;
}











// const score = 60;
// const name = 'taguchi';

// if (score >= 50) {
//     if (name === 'taguchi') {
//         console.log('Good job!');
//     }
// }

// if (score >= 50 && name ==='taguchi') {
//     console.log('Good job!')
// }

// && (and)
// || (or)
// ! (not)
// const score1 = 85;

// score1 >= 80 ? console.log('Great!') : console.log('OK...');
// 上の式はif構文の簡略型
// if (score >= 80) {
//     console.log('Great!');
// } else if (score >= 60) {
//     console.log('Good');
// } else {
//     console.log('OK...');
// }


