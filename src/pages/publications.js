import React from 'react';
// import styles from './publications.module.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PublicationCard from '../components/publicationCard/publicationCard';
import PageHeader from '../components/pageHeader/pageHeader';
const moment = require('moment-timezone');
moment.tz.setDefault('UTC');

class Publications extends React.Component {
  render() {
    const columns = [
      {
        Header: 'Title',
        accessor: 'title' //d => d.name
      },
      // {
      //   Header: 'URL',
      //   accessor: 'url' // String-based value accessors!
      // },
      {
        Header: 'Author',
        accessor: 'author' // String-based value accessors!
      },
      {
        Header: 'Team',
        accessor: 'team' // String-based value accessors!
      },
      {
        Header: 'Domain',
        accessor: 'domain' // String-based value accessors!
      },
      {
        Header: 'Category',
        accessor: 'category' // String-based value accessors!
      },
      {
        Header: 'Forum',
        accessor: 'forum' // String-based value accessors!
      },
      {
        Header: 'Domain',
        accessor: 'domain' // String-based value accessors!
      },
      {
        Header: 'Published On',
        accessor: 'publishedOn', // String-based value accessors!
        sort: 'desc',
        Cell: props => <span>{moment.utc(props.value).format('DD-MM-YYYY')}</span>
      },
      {
        Header: 'Likes',
        accessor: 'likes', // String-based value accessors!
        maxWidth: 80,
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },
      {
        Header: 'Views',
        accessor: 'views', // String-based value accessors!
        maxWidth: 80,
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },
      {
        Header: 'Comments',
        accessor: 'comments'
      }
    ];
    const totalCount = this.props.data.allPublicationsXlsxSheet1.totalCount;
    const reposdata = this.props.data.allPublicationsXlsxSheet1.edges.map(
      repo => {
        return {
          title: repo.node.Title,
          url: repo.node.URL,
          author: repo.node.Author,
          avatar: repo.node.Avatar,
          category: repo.node.Category,
          forum: repo.node.Forum,
          team: repo.node.Team,
          domain: repo.node.Area,
          excerpt: repo.node.Excerpt,
          publishedOn: repo.node.PublishedOn,
          likes: repo.node.Likes,
          views: repo.node.Views,
          comments: repo.node.Comments
        };
      }
    );
    const pageHeader = +totalCount + ' Publications & Events';
    return (
      <div>
        <PageHeader text={pageHeader} />
        <ReactTable
          getTheadThProps={(state, rowInfo, column) => {
            return {
              style: {
                fontWeight: 'bold'
              }
            };
          }}
          data={reposdata}
          className="-striped -highlight"
          columns={columns}
          defaultPageSize={10}
          SubComponent={row => {
            return (
              <PublicationCard
                title={row.original.title}
                author={row.original.author}
                avatar={row.original.avatar}
                url={row.original.url}
                excerpt={row.original.excerpt}
                domain={row.original.domain}
                team={row.original.team}
                category={row.original.category}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default Publications;

export const PublicationsQuery = graphql`
  query PublicationsQuery {
    allPublicationsXlsxSheet1 {
      totalCount
      edges {
        node {
          SNo
          Title
          URL
          Author
          Team
          Area
          Category
          Forum
          Likes
          Views
          Comments
          Excerpt
          Avatar
          PublishedOn
        }
      }
    }
  }
`;
