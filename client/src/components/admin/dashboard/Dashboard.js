import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFiles, getUser } from '../../../actions';
import { Grid } from 'semantic-ui-react';
import Sidebar from './elements/Sidebar';
import MainBoard from './elements/MainBoard';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getUser();
    this.props.fetchFiles();
  }

  renderAdmin(file) {
    if (file.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/files/edit/${file._id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/files/delete/${file._id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.files.map(file => {
      return (
        <div className="item" key={file._id}>
          {this.renderAdmin(file)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/files/${file._id}`}>{file.fileNumber}</Link>
            <div className="description">{file.summary}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <Grid padded>
        <Sidebar />
        <MainBoard />
        <div>
          <div className="ui celled list">{this.renderList()}</div>
        </div>
      </Grid>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    files: Object.values(state.files),
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchFiles, getUser }
)(Dashboard);

// <Grid padded className="tablet computer only">
//   <Menu borderless inverted fluid fixed="top">
//   </Menu>
// </Grid>
// <Grid padded className="mobile only">
//   <Menu borderless inverted fluid fixed="top">
//   </Menu>
// </Grid>

// <Grid padded>
//   <Grid.Column
//     tablet={3}
//     computer={3}
//     only="tablet computer"
//     id="sidebar"
//   >
//     <Menu vertical borderless fluid text>
//     </Menu>
//   </Grid.Column>
// <Grid.Column
//   mobile={16}
//   tablet={13}
//   computer={13}
//   floated="right"
//   id="content"
// >
//   <Grid padded>
//     <Grid.Row>
//       <Header dividing size="huge" as="h1">
//         Dashboard
//       </Header>
//     </Grid.Row>
//     <Grid.Row textAlign="center">
//       <Grid.Column mobile={8} tablet={4} computer={4}>
//         <Image
//           centered
//           circular
//           size="small"
//           src="/static/images/wireframe/square-image.png"
//         />
//       </Grid.Column>
//       <Grid.Column mobile={8} tablet={4} computer={4}>
//         <Image
//           centered
//           circular
//           size="small"
//           src="/static/images/wireframe/square-image.png"
//         />
//         <Label basic size="large">
//           Label
//         </Label>
//         <p>Something else</p>
//       </Grid.Column>
//       <Grid.Column mobile={8} tablet={4} computer={4}>
//         <Image
//           centered
//           circular
//           size="small"
//           src="/static/images/wireframe/square-image.png"
//         />
//         <Label basic size="large">
//           Label
//         </Label>
//         <p>Something else</p>
//       </Grid.Column>
//       <Grid.Column mobile={8} tablet={4} computer={4}>
//         <Image
//           centered
//           circular
//           size="small"
//           src="/static/images/wireframe/square-image.png"
//         />
//         <Label basic size="large">
//           Label
//         </Label>
//         <p>Something else</p>
//       </Grid.Column>
//     </Grid.Row>
//     <Divider section hidden />
//     <Grid.Row>
//       <Header dividing size="huge" as="h1">
//         Section title
//       </Header>
//     </Grid.Row>
//     <Grid.Row>
//       <Table singleLine striped selectable unstackable>

//       </Table>
//     </Grid.Row>
//   </Grid>
// </Grid.Column>
// </Grid>
