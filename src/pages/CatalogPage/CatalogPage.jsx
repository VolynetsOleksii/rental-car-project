import React, { useEffect, useState } from 'react'
import CardList from '../../components/CardList/CardList';
import { fetchAdverts, limit } from '../../services/advertsApi';
import { LoadMoreButton } from './CatalogPage.styled';

const CatalogPage = () => {
  
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    (async () => {
      const data = await fetchAdverts(page);

      if (page === 1) setAdverts(data);
      if (page > 1) setAdverts((prev) => [...prev, ...data]);
    })();
  }, [page]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };
  console.log('adverts: ', adverts);

  return (
    <div>
      CatalogPage
     {adverts.length > 0  && (<CardList adverts={adverts}/>)}
     {adverts.length > 0 && (adverts.length)%limit === 0 && (
        <LoadMoreButton type="button" onClick={handleLoadMoreClick}>
          Load more
        </LoadMoreButton>
      )}
      </div>
  )
}

export default CatalogPage;