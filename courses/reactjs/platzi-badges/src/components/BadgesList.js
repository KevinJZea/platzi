import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/BadgesList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName}${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="form-control">Filter Badges</label>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="form-control"
            type="text"
            name=""
            id="form-control"
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ul className="list-unstyled">
        <div className="form-group">
          <label htmlFor="form-control">Filter Badges</label>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="form-control"
            type="text"
            name=""
            id="form-control"
          />
        </div>
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <div className="Badges__container-container">
                  {/* <img
                    className="Badges__avatar"
                    src={badge.avatarUrl}
                    alt="Avatar"
                  /> */}
                  <Gravatar email={badge.email} className="Badges__avatar" />
                  <div className="Badges__data-container">
                    <h3 className="font-weight-bold Badge__data-name">
                      {badge.firstName} {badge.lastName}
                    </h3>
                    <div>
                      <img
                        className="Twitter__img"
                        src="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png"
                        alt="Twitter"
                      />
                      <span className="Badges__data-twitter">
                        @{badge.twitter}
                      </span>
                    </div>
                    <p className="Badge__data-jobTitle">{badge.jobTitle}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
