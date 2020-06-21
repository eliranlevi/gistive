import { connect } from "react-redux";
import { Gist } from "../interfaces/common";
import GistList from "../components/GistList";
import { getGists } from "../actions/gists";

interface DispatchProps {
  getGists: () => void;
}

interface StateProps {
  gists: Gist[];
}

export type GistListProps = StateProps & DispatchProps;

const mapStateToProps = ({ gists }: StateProps): StateProps => ({
  gists,
});

const mapDispatchToProps = {
  getGists,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GistList);
