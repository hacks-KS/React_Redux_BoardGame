import React from 'react'
import marked from 'marked';

//コメント表示の一番最下層のコンポーネント
//このコンポーネントでコメント表示のDOMを作成する
export default class Comment extends React.Component{
  //マークダウン記法でコメントを書けるようにする関数
  rawMarkup() {
    let rawMarkupHtml = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkupHtml };
  }

  //コメント表示のDOMを作成する
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
};
