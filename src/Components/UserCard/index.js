import React, { Component } from "react";
import styles from "./UserCard.module.css";

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.followed = this.followed.bind(this);
    this.unFollowed = this.unFollowed.bind(this);
    this.likeMade = this.likeMade.bind(this);
    this.likeUnMade = this.likeUnMade.bind(this);

    this.state = {
      firstname: "Lebron",
      surname: "James",
      link: "@KingJames",
      src: "https://xsport.ua/upload/resize_cache/iblock/89a/916_537_2/89a6d5018a97f75ec2fcc4bd34727217.jpg",
      alt: "Lebron James",
      isFollowed: false,
      counter: 1999,
    };
  }

  followed = (e) => {
    this.setState({ isFollowed: true });
  };

  unFollowed = (e) => {
    this.setState({ isFollowed: false });
  };

  likeMade = (e) => {
    const { counter } = this.state;
    const { step } = this.props;
    this.setState({ counter: counter + step });
  };
  likeUnMade = (e) => {
    const { counter } = this.state;
    const { step } = this.props;
    this.setState({ counter: counter - step });
  };

  render() {
    const { firstname, surname, link, src, alt, counter } = this.state;

    const isFollowed = this.state.isFollowed;

    let likeBtn = null;
    if (counter === 1999) {
      likeBtn = <LikeItBtn onClick={this.likeMade} />;
    } else {
      likeBtn = <DislikeBtn onClick={this.likeUnMade} />;
    }

    let button = null;
    if (isFollowed) {
      button = <SetFollowedCBtn onClick={this.unFollowed} />;
    } else {
      button = <UnFollowedBtn onClick={this.followed} />;
    }

    return (
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={src} alt={alt} />
          <h1>{firstname + " " + surname}</h1>
          <p>{link}</p>
        </div>
        <div className={styles.info}>
          <ul className={styles.list}>
            <li>
              Tweets
              <p>995</p>
            </li>
            <li>
              Following
              <p>400</p>
            </li>
            <li>
              Followers
              <p>{counter}</p>
            </li>
          </ul>
        </div>
        <div className={styles.borderTitle}>
          {button}
          {likeBtn}
        </div>
      </div>
    );
  }
}

function SetFollowedCBtn(props) {
  return (
    <button className={styles.defaultColor} onClick={props.onClick}>
      Subscribe
    </button>
  );
}

function UnFollowedBtn(props) {
  return (
    <button className={styles.followBtn} onClick={props.onClick}>
      Unsubscribe
    </button>
  );
}

function LikeItBtn(props) {
  return (
    <button className={styles.setLikeBtn} onClick={props.onClick}>
      Like!
    </button>
  );
}

function DislikeBtn(props) {
  return (
    <button className={styles.deleteLikeBtn} onClick={props.onClick}>
      Dislike!
    </button>
  );
}
