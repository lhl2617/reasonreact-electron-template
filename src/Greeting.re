let comp = ReasonReact.statelessComponent("Greeting");

let make = (~name, _children) => {
    ... comp,
    render : (_self) => <p> (ReasonReact.string("Hello " ++ name ++ "!")) </p>
}