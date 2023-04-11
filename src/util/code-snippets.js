export const addEndpoints = `// REQUIRED
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));

  // troveql to use the cache
  app.use('/troveql', 
    cache.queryCache,
    (req: Request, res: Response) => res.status(200).json(res.locals.value)
  );

  // trovemetrics to clear the cache from TroveMetrics
  app.use('/trovemetrics', 
    cache.troveMetrics,
    (req: Request, res: Response) => res.status(200).json(res.locals.message)
  );`

export const fetchRequest = `//MODIFY FRONTEND FETCH REQUESTS TO POINT TO TROVEQL
  fetch('/troveql', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json' 
  }, ...`