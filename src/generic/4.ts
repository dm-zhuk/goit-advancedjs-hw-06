/*  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

class Component {constructor (public props:T) {}
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}  */

interface Props {
  title: string;
}
class Component<T extends Props> {
  constructor(public props: T) {}
}
class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// test
const pageProps = { title: "Welcome to our page!" };
const page = new Page(pageProps);

page.pageInfo(); // Welcome to our page!

export {};
