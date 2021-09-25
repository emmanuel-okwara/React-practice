
class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a place holder</div>
        )
    }
}
class IssueRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.issue.id}</td>
                <td>{this.props.issue.status}</td>
                <td>{this.props.issue.owner}</td>
                <td>{this.props.issue.created}</td>
                <td>{this.props.issue.effort}</td>
                <td>{this.props.issue.due ? this.props.issue.due : ''}</td>
                <td>{this.props.issue.title}</td>
            </tr>
        )
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => <IssueRow issue={issue} />);
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>
            </table>
        )
    }
}

class IssueAdd extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const form = document.forms.IssuesForm;
        const issue = {
            owner: form.owner.value,
            title: form.title.value
        }
        this.props.createIssue(issue);
        form.owner.value = "";
        form.title.value = "";
    }
    render() {
        return (
            <form name="IssuesForm" onSubmit={this.handleSubmit}>
                <input type="text" name="owner" placeholder="Owner" />
                <input type="text" name="title" placeholder="Title" />
                <button>Add</button>
            </form>
        );
    }
}

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { issues: [] };
        this.createIssue = this.createIssue.bind(this);

    }
    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const query = `query{
            issueList{
                id title status owner created effort due
            }
        }`;
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });

        const result = await response.json();
        this.setState({ issues: result.data.issueList });
    }
    createIssue(issue) {
        issue.id = this.state.issues.length + 1;
        issue.status = "New";
        issue.effort = 6;
        issue.created = new Date().toDateString();
        const newIssueList = this.state.issues.slice();
        newIssueList.push(issue);
        this.setState({ issues: newIssueList });
    }
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={this.state.issues} />
                <hr />
                <IssueAdd createIssue={this.createIssue} />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<IssueList />, document.querySelector('#contents'));
