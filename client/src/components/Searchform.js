import react from "React"

function Searchform(props) {

    return (
        <div className="Container">
            <row className="row">
                <Col size="md-6">
                    <h1>Book Search</h1>
                </Col>
            </row>
            <row className="row">
                <col size="md-6">
                    <h2>Enter Book Name to Search</h2>
                </col>
            </row>
            <form className="SearchForm">
                <Input type="text" value={this.props.searchBook} onChange={this.props.handleInputChange} name="SearchBook"
                    placeholder="Book Name" />

                <button className="btn btn-success" onClick={this.handleFormSubmit} >Search</button>

            </form>
        </div>
    );
}
export default Searchform;