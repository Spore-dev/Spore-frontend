import './contributors.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Contributors = () => {
  const [contrib, setContributors] = useState([]);

  useEffect(() => {
    async function getContributors() {
      getContributorsJson()
    }
    getContributors()
  }, [])

  const getContributorsJson = () => {
    axios.get(
      'https://api.github.com/repos/SporeFinance/Spore-frontend/contributors?per_page=15'
    ).then(res => {
      setContributors(res.data);
    });
  }

  return (
    <>
      <div className='col-md-12 text-md-center'>
        {
          contrib.map((data: any) => {
            return <div className='contributor-style' key={data.html_url}>
              <a href={data.html_url} target="_blank" rel="noreferrer">
                <img src={data.avatar_url} alt='' />
                <span>{data.login}</span>
              </a>
            </div>
          })
        }
      </div>
    </>
  );

};
export default Contributors;