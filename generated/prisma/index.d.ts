
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model UserSubscription
 * 
 */
export type UserSubscription = $Result.DefaultSelection<Prisma.$UserSubscriptionPayload>
/**
 * Model ArtistMetadata
 * 
 */
export type ArtistMetadata = $Result.DefaultSelection<Prisma.$ArtistMetadataPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model PlaylistSong
 * 
 */
export type PlaylistSong = $Result.DefaultSelection<Prisma.$PlaylistSongPayload>
/**
 * Model FavoriteSong
 * 
 */
export type FavoriteSong = $Result.DefaultSelection<Prisma.$FavoriteSongPayload>
/**
 * Model LikedSong
 * 
 */
export type LikedSong = $Result.DefaultSelection<Prisma.$LikedSongPayload>
/**
 * Model SongStats
 * 
 */
export type SongStats = $Result.DefaultSelection<Prisma.$SongStatsPayload>
/**
 * Model PlatformStats
 * 
 */
export type PlatformStats = $Result.DefaultSelection<Prisma.$PlatformStatsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSubscription`: Exposes CRUD operations for the **UserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscriptions
    * const userSubscriptions = await prisma.userSubscription.findMany()
    * ```
    */
  get userSubscription(): Prisma.UserSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistMetadata`: Exposes CRUD operations for the **ArtistMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistMetadata
    * const artistMetadata = await prisma.artistMetadata.findMany()
    * ```
    */
  get artistMetadata(): Prisma.ArtistMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlistSong`: Exposes CRUD operations for the **PlaylistSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistSongs
    * const playlistSongs = await prisma.playlistSong.findMany()
    * ```
    */
  get playlistSong(): Prisma.PlaylistSongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteSong`: Exposes CRUD operations for the **FavoriteSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteSongs
    * const favoriteSongs = await prisma.favoriteSong.findMany()
    * ```
    */
  get favoriteSong(): Prisma.FavoriteSongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likedSong`: Exposes CRUD operations for the **LikedSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedSongs
    * const likedSongs = await prisma.likedSong.findMany()
    * ```
    */
  get likedSong(): Prisma.LikedSongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.songStats`: Exposes CRUD operations for the **SongStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongStats
    * const songStats = await prisma.songStats.findMany()
    * ```
    */
  get songStats(): Prisma.SongStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platformStats`: Exposes CRUD operations for the **PlatformStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlatformStats
    * const platformStats = await prisma.platformStats.findMany()
    * ```
    */
  get platformStats(): Prisma.PlatformStatsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Song: 'Song',
    UserSubscription: 'UserSubscription',
    ArtistMetadata: 'ArtistMetadata',
    Playlist: 'Playlist',
    PlaylistSong: 'PlaylistSong',
    FavoriteSong: 'FavoriteSong',
    LikedSong: 'LikedSong',
    SongStats: 'SongStats',
    PlatformStats: 'PlatformStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "song" | "userSubscription" | "artistMetadata" | "playlist" | "playlistSong" | "favoriteSong" | "likedSong" | "songStats" | "platformStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      UserSubscription: {
        payload: Prisma.$UserSubscriptionPayload<ExtArgs>
        fields: Prisma.UserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.UserSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.UserSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.UserSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.UserSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.UserSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          update: {
            args: Prisma.UserSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.UserSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.UserSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.UserSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscription>
          }
          groupBy: {
            args: Prisma.UserSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      ArtistMetadata: {
        payload: Prisma.$ArtistMetadataPayload<ExtArgs>
        fields: Prisma.ArtistMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload>
          }
          findFirst: {
            args: Prisma.ArtistMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload>
          }
          findMany: {
            args: Prisma.ArtistMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload>[]
          }
          create: {
            args: Prisma.ArtistMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload>
          }
          createMany: {
            args: Prisma.ArtistMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload>[]
          }
          delete: {
            args: Prisma.ArtistMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload>
          }
          update: {
            args: Prisma.ArtistMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload>
          }
          deleteMany: {
            args: Prisma.ArtistMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload>[]
          }
          upsert: {
            args: Prisma.ArtistMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistMetadataPayload>
          }
          aggregate: {
            args: Prisma.ArtistMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistMetadata>
          }
          groupBy: {
            args: Prisma.ArtistMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistMetadataCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      PlaylistSong: {
        payload: Prisma.$PlaylistSongPayload<ExtArgs>
        fields: Prisma.PlaylistSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          findFirst: {
            args: Prisma.PlaylistSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          findMany: {
            args: Prisma.PlaylistSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>[]
          }
          create: {
            args: Prisma.PlaylistSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          createMany: {
            args: Prisma.PlaylistSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>[]
          }
          delete: {
            args: Prisma.PlaylistSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          update: {
            args: Prisma.PlaylistSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistSongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          aggregate: {
            args: Prisma.PlaylistSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistSong>
          }
          groupBy: {
            args: Prisma.PlaylistSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistSongCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistSongCountAggregateOutputType> | number
          }
        }
      }
      FavoriteSong: {
        payload: Prisma.$FavoriteSongPayload<ExtArgs>
        fields: Prisma.FavoriteSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload>
          }
          findFirst: {
            args: Prisma.FavoriteSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload>
          }
          findMany: {
            args: Prisma.FavoriteSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload>[]
          }
          create: {
            args: Prisma.FavoriteSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload>
          }
          createMany: {
            args: Prisma.FavoriteSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload>[]
          }
          delete: {
            args: Prisma.FavoriteSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload>
          }
          update: {
            args: Prisma.FavoriteSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteSongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSongPayload>
          }
          aggregate: {
            args: Prisma.FavoriteSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteSong>
          }
          groupBy: {
            args: Prisma.FavoriteSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteSongCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteSongCountAggregateOutputType> | number
          }
        }
      }
      LikedSong: {
        payload: Prisma.$LikedSongPayload<ExtArgs>
        fields: Prisma.LikedSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          findFirst: {
            args: Prisma.LikedSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          findMany: {
            args: Prisma.LikedSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>[]
          }
          create: {
            args: Prisma.LikedSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          createMany: {
            args: Prisma.LikedSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>[]
          }
          delete: {
            args: Prisma.LikedSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          update: {
            args: Prisma.LikedSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          deleteMany: {
            args: Prisma.LikedSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikedSongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>[]
          }
          upsert: {
            args: Prisma.LikedSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          aggregate: {
            args: Prisma.LikedSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedSong>
          }
          groupBy: {
            args: Prisma.LikedSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedSongCountArgs<ExtArgs>
            result: $Utils.Optional<LikedSongCountAggregateOutputType> | number
          }
        }
      }
      SongStats: {
        payload: Prisma.$SongStatsPayload<ExtArgs>
        fields: Prisma.SongStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload>
          }
          findFirst: {
            args: Prisma.SongStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload>
          }
          findMany: {
            args: Prisma.SongStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload>[]
          }
          create: {
            args: Prisma.SongStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload>
          }
          createMany: {
            args: Prisma.SongStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload>[]
          }
          delete: {
            args: Prisma.SongStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload>
          }
          update: {
            args: Prisma.SongStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload>
          }
          deleteMany: {
            args: Prisma.SongStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload>[]
          }
          upsert: {
            args: Prisma.SongStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongStatsPayload>
          }
          aggregate: {
            args: Prisma.SongStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSongStats>
          }
          groupBy: {
            args: Prisma.SongStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongStatsCountArgs<ExtArgs>
            result: $Utils.Optional<SongStatsCountAggregateOutputType> | number
          }
        }
      }
      PlatformStats: {
        payload: Prisma.$PlatformStatsPayload<ExtArgs>
        fields: Prisma.PlatformStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload>
          }
          findFirst: {
            args: Prisma.PlatformStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload>
          }
          findMany: {
            args: Prisma.PlatformStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload>[]
          }
          create: {
            args: Prisma.PlatformStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload>
          }
          createMany: {
            args: Prisma.PlatformStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload>[]
          }
          delete: {
            args: Prisma.PlatformStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload>
          }
          update: {
            args: Prisma.PlatformStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload>
          }
          deleteMany: {
            args: Prisma.PlatformStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload>[]
          }
          upsert: {
            args: Prisma.PlatformStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformStatsPayload>
          }
          aggregate: {
            args: Prisma.PlatformStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatformStats>
          }
          groupBy: {
            args: Prisma.PlatformStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformStatsCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    song?: SongOmit
    userSubscription?: UserSubscriptionOmit
    artistMetadata?: ArtistMetadataOmit
    playlist?: PlaylistOmit
    playlistSong?: PlaylistSongOmit
    favoriteSong?: FavoriteSongOmit
    likedSong?: LikedSongOmit
    songStats?: SongStatsOmit
    platformStats?: PlatformStatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    songs: number
    subscriptions: number
    playlists: number
    favoriteSongs: number
    likedSongs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | UserCountOutputTypeCountSongsArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
    favoriteSongs?: boolean | UserCountOutputTypeCountFavoriteSongsArgs
    likedSongs?: boolean | UserCountOutputTypeCountLikedSongsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteSongWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongWhereInput
  }


  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    playlistSongs: number
    favoriteSongs: number
    likedSongs: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlistSongs?: boolean | SongCountOutputTypeCountPlaylistSongsArgs
    favoriteSongs?: boolean | SongCountOutputTypeCountFavoriteSongsArgs
    likedSongs?: boolean | SongCountOutputTypeCountLikedSongsArgs
  }

  // Custom InputTypes
  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlaylistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistSongWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountFavoriteSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteSongWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountLikedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    songs: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | PlaylistCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistSongWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    username: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isArtist: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    username: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isArtist: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    walletAddress: number
    username: number
    email: number
    createdAt: number
    updatedAt: number
    isArtist: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    walletAddress?: true
    username?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    isArtist?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    username?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    isArtist?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    walletAddress?: true
    username?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    isArtist?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    walletAddress: string
    username: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isArtist: boolean | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    username?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isArtist?: boolean
    songs?: boolean | User$songsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    artistMetadata?: boolean | User$artistMetadataArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    favoriteSongs?: boolean | User$favoriteSongsArgs<ExtArgs>
    likedSongs?: boolean | User$likedSongsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    username?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isArtist?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    username?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isArtist?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    username?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isArtist?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletAddress" | "username" | "email" | "createdAt" | "updatedAt" | "isArtist", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | User$songsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    artistMetadata?: boolean | User$artistMetadataArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    favoriteSongs?: boolean | User$favoriteSongsArgs<ExtArgs>
    likedSongs?: boolean | User$likedSongsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      songs: Prisma.$SongPayload<ExtArgs>[]
      subscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
      artistMetadata: Prisma.$ArtistMetadataPayload<ExtArgs> | null
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      favoriteSongs: Prisma.$FavoriteSongPayload<ExtArgs>[]
      likedSongs: Prisma.$LikedSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      username: string | null
      email: string | null
      createdAt: Date | null
      updatedAt: Date | null
      isArtist: boolean | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends User$songsArgs<ExtArgs> = {}>(args?: Subset<T, User$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    artistMetadata<T extends User$artistMetadataArgs<ExtArgs> = {}>(args?: Subset<T, User$artistMetadataArgs<ExtArgs>>): Prisma__ArtistMetadataClient<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteSongs<T extends User$favoriteSongsArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedSongs<T extends User$likedSongsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isArtist: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.songs
   */
  export type User$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * User.artistMetadata
   */
  export type User$artistMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    where?: ArtistMetadataWhereInput
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.favoriteSongs
   */
  export type User$favoriteSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    where?: FavoriteSongWhereInput
    orderBy?: FavoriteSongOrderByWithRelationInput | FavoriteSongOrderByWithRelationInput[]
    cursor?: FavoriteSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteSongScalarFieldEnum | FavoriteSongScalarFieldEnum[]
  }

  /**
   * User.likedSongs
   */
  export type User$likedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    where?: LikedSongWhereInput
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    cursor?: LikedSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type SongSumAggregateOutputType = {
    price: Decimal | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    name: string | null
    ipfsHash: string | null
    previewIpfsHash: string | null
    price: Decimal | null
    ownerId: string | null
    forSale: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ipfsHash: string | null
    previewIpfsHash: string | null
    price: Decimal | null
    ownerId: string | null
    forSale: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    name: number
    ipfsHash: number
    previewIpfsHash: number
    price: number
    ownerId: number
    forSale: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    price?: true
  }

  export type SongSumAggregateInputType = {
    price?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    name?: true
    ipfsHash?: true
    previewIpfsHash?: true
    price?: true
    ownerId?: true
    forSale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    name?: true
    ipfsHash?: true
    previewIpfsHash?: true
    price?: true
    ownerId?: true
    forSale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    name?: true
    ipfsHash?: true
    previewIpfsHash?: true
    price?: true
    ownerId?: true
    forSale?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal
    ownerId: string | null
    forSale: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ipfsHash?: boolean
    previewIpfsHash?: boolean
    price?: boolean
    ownerId?: boolean
    forSale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Song$ownerArgs<ExtArgs>
    playlistSongs?: boolean | Song$playlistSongsArgs<ExtArgs>
    favoriteSongs?: boolean | Song$favoriteSongsArgs<ExtArgs>
    likedSongs?: boolean | Song$likedSongsArgs<ExtArgs>
    stats?: boolean | Song$statsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ipfsHash?: boolean
    previewIpfsHash?: boolean
    price?: boolean
    ownerId?: boolean
    forSale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Song$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ipfsHash?: boolean
    previewIpfsHash?: boolean
    price?: boolean
    ownerId?: boolean
    forSale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Song$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    name?: boolean
    ipfsHash?: boolean
    previewIpfsHash?: boolean
    price?: boolean
    ownerId?: boolean
    forSale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ipfsHash" | "previewIpfsHash" | "price" | "ownerId" | "forSale" | "createdAt" | "updatedAt", ExtArgs["result"]["song"]>
  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Song$ownerArgs<ExtArgs>
    playlistSongs?: boolean | Song$playlistSongsArgs<ExtArgs>
    favoriteSongs?: boolean | Song$favoriteSongsArgs<ExtArgs>
    likedSongs?: boolean | Song$likedSongsArgs<ExtArgs>
    stats?: boolean | Song$statsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Song$ownerArgs<ExtArgs>
  }
  export type SongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Song$ownerArgs<ExtArgs>
  }

  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      playlistSongs: Prisma.$PlaylistSongPayload<ExtArgs>[]
      favoriteSongs: Prisma.$FavoriteSongPayload<ExtArgs>[]
      likedSongs: Prisma.$LikedSongPayload<ExtArgs>[]
      stats: Prisma.$SongStatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ipfsHash: string
      previewIpfsHash: string
      price: Prisma.Decimal
      ownerId: string | null
      forSale: boolean | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["song"]>
    composites: {}
  }

  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongFindUniqueArgs>(args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongFindFirstArgs>(args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongFindManyArgs>(args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
     */
    create<T extends SongCreateArgs>(args: SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Songs.
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongCreateManyArgs>(args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
     */
    delete<T extends SongDeleteArgs>(args: SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongUpdateArgs>(args: SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongDeleteManyArgs>(args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongUpdateManyArgs>(args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs and returns the data updated in the database.
     * @param {SongUpdateManyAndReturnArgs} args - Arguments to update many Songs.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongUpdateManyAndReturnArgs>(args: SelectSubset<T, SongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends SongUpsertArgs>(args: SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Song$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Song$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playlistSongs<T extends Song$playlistSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$playlistSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteSongs<T extends Song$favoriteSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$favoriteSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedSongs<T extends Song$likedSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$likedSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stats<T extends Song$statsArgs<ExtArgs> = {}>(args?: Subset<T, Song$statsArgs<ExtArgs>>): Prisma__SongStatsClient<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Song model
   */
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'String'>
    readonly name: FieldRef<"Song", 'String'>
    readonly ipfsHash: FieldRef<"Song", 'String'>
    readonly previewIpfsHash: FieldRef<"Song", 'String'>
    readonly price: FieldRef<"Song", 'Decimal'>
    readonly ownerId: FieldRef<"Song", 'String'>
    readonly forSale: FieldRef<"Song", 'Boolean'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
    readonly updatedAt: FieldRef<"Song", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }

  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song createManyAndReturn
   */
  export type SongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
  }

  /**
   * Song updateManyAndReturn
   */
  export type SongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }

  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to delete.
     */
    limit?: number
  }

  /**
   * Song.owner
   */
  export type Song$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Song.playlistSongs
   */
  export type Song$playlistSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    where?: PlaylistSongWhereInput
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    cursor?: PlaylistSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * Song.favoriteSongs
   */
  export type Song$favoriteSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    where?: FavoriteSongWhereInput
    orderBy?: FavoriteSongOrderByWithRelationInput | FavoriteSongOrderByWithRelationInput[]
    cursor?: FavoriteSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteSongScalarFieldEnum | FavoriteSongScalarFieldEnum[]
  }

  /**
   * Song.likedSongs
   */
  export type Song$likedSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    where?: LikedSongWhereInput
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    cursor?: LikedSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * Song.stats
   */
  export type Song$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    where?: SongStatsWhereInput
  }

  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
  }


  /**
   * Model UserSubscription
   */

  export type AggregateUserSubscription = {
    _count: UserSubscriptionCountAggregateOutputType | null
    _avg: UserSubscriptionAvgAggregateOutputType | null
    _sum: UserSubscriptionSumAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  export type UserSubscriptionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type UserSubscriptionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type UserSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planType: string | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    amount: Decimal | null
  }

  export type UserSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planType: string | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    amount: Decimal | null
  }

  export type UserSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    planType: number
    isActive: number
    startDate: number
    endDate: number
    amount: number
    _all: number
  }


  export type UserSubscriptionAvgAggregateInputType = {
    amount?: true
  }

  export type UserSubscriptionSumAggregateInputType = {
    amount?: true
  }

  export type UserSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    planType?: true
    isActive?: true
    startDate?: true
    endDate?: true
    amount?: true
  }

  export type UserSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    planType?: true
    isActive?: true
    startDate?: true
    endDate?: true
    amount?: true
  }

  export type UserSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    planType?: true
    isActive?: true
    startDate?: true
    endDate?: true
    amount?: true
    _all?: true
  }

  export type UserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscription to aggregate.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscriptions
    **/
    _count?: true | UserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type GetUserSubscriptionAggregateType<T extends UserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscription[P]>
      : GetScalarType<T[P], AggregateUserSubscription[P]>
  }




  export type UserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithAggregationInput | UserSubscriptionOrderByWithAggregationInput[]
    by: UserSubscriptionScalarFieldEnum[] | UserSubscriptionScalarFieldEnum
    having?: UserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscriptionCountAggregateInputType | true
    _avg?: UserSubscriptionAvgAggregateInputType
    _sum?: UserSubscriptionSumAggregateInputType
    _min?: UserSubscriptionMinAggregateInputType
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type UserSubscriptionGroupByOutputType = {
    id: string
    userId: string
    planType: string
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    amount: Decimal | null
    _count: UserSubscriptionCountAggregateOutputType | null
    _avg: UserSubscriptionAvgAggregateOutputType | null
    _sum: UserSubscriptionSumAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  type GetUserSubscriptionGroupByPayload<T extends UserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planType?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planType?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planType?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    planType?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    amount?: boolean
  }

  export type UserSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planType" | "isActive" | "startDate" | "endDate" | "amount", ExtArgs["result"]["userSubscription"]>
  export type UserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planType: string
      isActive: boolean | null
      startDate: Date | null
      endDate: Date | null
      amount: Prisma.Decimal | null
    }, ExtArgs["result"]["userSubscription"]>
    composites: {}
  }

  type UserSubscriptionGetPayload<S extends boolean | null | undefined | UserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$UserSubscriptionPayload, S>

  type UserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscriptionCountAggregateInputType | true
    }

  export interface UserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscription'], meta: { name: 'UserSubscription' } }
    /**
     * Find zero or one UserSubscription that matches the filter.
     * @param {UserSubscriptionFindUniqueArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscriptionFindUniqueArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscriptionFindFirstArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany()
     * 
     * // Get first 10 UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscriptionFindManyArgs>(args?: SelectSubset<T, UserSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscription.
     * @param {UserSubscriptionCreateArgs} args - Arguments to create a UserSubscription.
     * @example
     * // Create one UserSubscription
     * const UserSubscription = await prisma.userSubscription.create({
     *   data: {
     *     // ... data to create a UserSubscription
     *   }
     * })
     * 
     */
    create<T extends UserSubscriptionCreateArgs>(args: SelectSubset<T, UserSubscriptionCreateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscriptions.
     * @param {UserSubscriptionCreateManyArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscriptionCreateManyArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubscriptions and returns the data saved in the database.
     * @param {UserSubscriptionCreateManyAndReturnArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSubscription.
     * @param {UserSubscriptionDeleteArgs} args - Arguments to delete one UserSubscription.
     * @example
     * // Delete one UserSubscription
     * const UserSubscription = await prisma.userSubscription.delete({
     *   where: {
     *     // ... filter to delete one UserSubscription
     *   }
     * })
     * 
     */
    delete<T extends UserSubscriptionDeleteArgs>(args: SelectSubset<T, UserSubscriptionDeleteArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscription.
     * @param {UserSubscriptionUpdateArgs} args - Arguments to update one UserSubscription.
     * @example
     * // Update one UserSubscription
     * const userSubscription = await prisma.userSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscriptionUpdateArgs>(args: SelectSubset<T, UserSubscriptionUpdateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscriptions.
     * @param {UserSubscriptionDeleteManyArgs} args - Arguments to filter UserSubscriptions to delete.
     * @example
     * // Delete a few UserSubscriptions
     * const { count } = await prisma.userSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscriptionDeleteManyArgs>(args?: SelectSubset<T, UserSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscriptionUpdateManyArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions and returns the data updated in the database.
     * @param {UserSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many UserSubscriptions.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSubscription.
     * @param {UserSubscriptionUpsertArgs} args - Arguments to update or create a UserSubscription.
     * @example
     * // Update or create a UserSubscription
     * const userSubscription = await prisma.userSubscription.upsert({
     *   create: {
     *     // ... data to create a UserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscription we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscriptionUpsertArgs>(args: SelectSubset<T, UserSubscriptionUpsertArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionCountArgs} args - Arguments to filter UserSubscriptions to count.
     * @example
     * // Count the number of UserSubscriptions
     * const count = await prisma.userSubscription.count({
     *   where: {
     *     // ... the filter for the UserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends UserSubscriptionCountArgs>(
      args?: Subset<T, UserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSubscriptionAggregateArgs>(args: Subset<T, UserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetUserSubscriptionAggregateType<T>>

    /**
     * Group by UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscription model
   */
  readonly fields: UserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSubscription model
   */
  interface UserSubscriptionFieldRefs {
    readonly id: FieldRef<"UserSubscription", 'String'>
    readonly userId: FieldRef<"UserSubscription", 'String'>
    readonly planType: FieldRef<"UserSubscription", 'String'>
    readonly isActive: FieldRef<"UserSubscription", 'Boolean'>
    readonly startDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly endDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly amount: FieldRef<"UserSubscription", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscription findUnique
   */
  export type UserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findUniqueOrThrow
   */
  export type UserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findFirst
   */
  export type UserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findFirstOrThrow
   */
  export type UserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findMany
   */
  export type UserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscriptions to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription create
   */
  export type UserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscription.
     */
    data: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
  }

  /**
   * UserSubscription createMany
   */
  export type UserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubscription createManyAndReturn
   */
  export type UserSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription update
   */
  export type UserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscription.
     */
    data: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which UserSubscription to update.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription updateMany
   */
  export type UserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
  }

  /**
   * UserSubscription updateManyAndReturn
   */
  export type UserSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription upsert
   */
  export type UserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscription to update in case it exists.
     */
    where: UserSubscriptionWhereUniqueInput
    /**
     * In case the UserSubscription found by the `where` argument doesn't exist, create a new UserSubscription with this data.
     */
    create: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
    /**
     * In case the UserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
  }

  /**
   * UserSubscription delete
   */
  export type UserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which UserSubscription to delete.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription deleteMany
   */
  export type UserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscriptions to delete
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * UserSubscription without action
   */
  export type UserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model ArtistMetadata
   */

  export type AggregateArtistMetadata = {
    _count: ArtistMetadataCountAggregateOutputType | null
    _avg: ArtistMetadataAvgAggregateOutputType | null
    _sum: ArtistMetadataSumAggregateOutputType | null
    _min: ArtistMetadataMinAggregateOutputType | null
    _max: ArtistMetadataMaxAggregateOutputType | null
  }

  export type ArtistMetadataAvgAggregateOutputType = {
    totalSongs: number | null
    totalSales: number | null
  }

  export type ArtistMetadataSumAggregateOutputType = {
    totalSongs: number | null
    totalSales: number | null
  }

  export type ArtistMetadataMinAggregateOutputType = {
    id: string | null
    userId: string | null
    profileImage: string | null
    bio: string | null
    totalSongs: number | null
    totalSales: number | null
  }

  export type ArtistMetadataMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    profileImage: string | null
    bio: string | null
    totalSongs: number | null
    totalSales: number | null
  }

  export type ArtistMetadataCountAggregateOutputType = {
    id: number
    userId: number
    profileImage: number
    bio: number
    socialLinks: number
    totalSongs: number
    totalSales: number
    _all: number
  }


  export type ArtistMetadataAvgAggregateInputType = {
    totalSongs?: true
    totalSales?: true
  }

  export type ArtistMetadataSumAggregateInputType = {
    totalSongs?: true
    totalSales?: true
  }

  export type ArtistMetadataMinAggregateInputType = {
    id?: true
    userId?: true
    profileImage?: true
    bio?: true
    totalSongs?: true
    totalSales?: true
  }

  export type ArtistMetadataMaxAggregateInputType = {
    id?: true
    userId?: true
    profileImage?: true
    bio?: true
    totalSongs?: true
    totalSales?: true
  }

  export type ArtistMetadataCountAggregateInputType = {
    id?: true
    userId?: true
    profileImage?: true
    bio?: true
    socialLinks?: true
    totalSongs?: true
    totalSales?: true
    _all?: true
  }

  export type ArtistMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistMetadata to aggregate.
     */
    where?: ArtistMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistMetadata to fetch.
     */
    orderBy?: ArtistMetadataOrderByWithRelationInput | ArtistMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistMetadata
    **/
    _count?: true | ArtistMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMetadataMaxAggregateInputType
  }

  export type GetArtistMetadataAggregateType<T extends ArtistMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistMetadata[P]>
      : GetScalarType<T[P], AggregateArtistMetadata[P]>
  }




  export type ArtistMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistMetadataWhereInput
    orderBy?: ArtistMetadataOrderByWithAggregationInput | ArtistMetadataOrderByWithAggregationInput[]
    by: ArtistMetadataScalarFieldEnum[] | ArtistMetadataScalarFieldEnum
    having?: ArtistMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistMetadataCountAggregateInputType | true
    _avg?: ArtistMetadataAvgAggregateInputType
    _sum?: ArtistMetadataSumAggregateInputType
    _min?: ArtistMetadataMinAggregateInputType
    _max?: ArtistMetadataMaxAggregateInputType
  }

  export type ArtistMetadataGroupByOutputType = {
    id: string
    userId: string
    profileImage: string | null
    bio: string | null
    socialLinks: JsonValue | null
    totalSongs: number | null
    totalSales: number | null
    _count: ArtistMetadataCountAggregateOutputType | null
    _avg: ArtistMetadataAvgAggregateOutputType | null
    _sum: ArtistMetadataSumAggregateOutputType | null
    _min: ArtistMetadataMinAggregateOutputType | null
    _max: ArtistMetadataMaxAggregateOutputType | null
  }

  type GetArtistMetadataGroupByPayload<T extends ArtistMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistMetadataGroupByOutputType[P]>
        }
      >
    >


  export type ArtistMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profileImage?: boolean
    bio?: boolean
    socialLinks?: boolean
    totalSongs?: boolean
    totalSales?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistMetadata"]>

  export type ArtistMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profileImage?: boolean
    bio?: boolean
    socialLinks?: boolean
    totalSongs?: boolean
    totalSales?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistMetadata"]>

  export type ArtistMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profileImage?: boolean
    bio?: boolean
    socialLinks?: boolean
    totalSongs?: boolean
    totalSales?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistMetadata"]>

  export type ArtistMetadataSelectScalar = {
    id?: boolean
    userId?: boolean
    profileImage?: boolean
    bio?: boolean
    socialLinks?: boolean
    totalSongs?: boolean
    totalSales?: boolean
  }

  export type ArtistMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "profileImage" | "bio" | "socialLinks" | "totalSongs" | "totalSales", ExtArgs["result"]["artistMetadata"]>
  export type ArtistMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArtistMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArtistMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArtistMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistMetadata"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      profileImage: string | null
      bio: string | null
      socialLinks: Prisma.JsonValue | null
      totalSongs: number | null
      totalSales: number | null
    }, ExtArgs["result"]["artistMetadata"]>
    composites: {}
  }

  type ArtistMetadataGetPayload<S extends boolean | null | undefined | ArtistMetadataDefaultArgs> = $Result.GetResult<Prisma.$ArtistMetadataPayload, S>

  type ArtistMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistMetadataCountAggregateInputType | true
    }

  export interface ArtistMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistMetadata'], meta: { name: 'ArtistMetadata' } }
    /**
     * Find zero or one ArtistMetadata that matches the filter.
     * @param {ArtistMetadataFindUniqueArgs} args - Arguments to find a ArtistMetadata
     * @example
     * // Get one ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistMetadataFindUniqueArgs>(args: SelectSubset<T, ArtistMetadataFindUniqueArgs<ExtArgs>>): Prisma__ArtistMetadataClient<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistMetadataFindUniqueOrThrowArgs} args - Arguments to find a ArtistMetadata
     * @example
     * // Get one ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistMetadataClient<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistMetadataFindFirstArgs} args - Arguments to find a ArtistMetadata
     * @example
     * // Get one ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistMetadataFindFirstArgs>(args?: SelectSubset<T, ArtistMetadataFindFirstArgs<ExtArgs>>): Prisma__ArtistMetadataClient<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistMetadataFindFirstOrThrowArgs} args - Arguments to find a ArtistMetadata
     * @example
     * // Get one ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistMetadataClient<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.findMany()
     * 
     * // Get first 10 ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistMetadataWithIdOnly = await prisma.artistMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistMetadataFindManyArgs>(args?: SelectSubset<T, ArtistMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistMetadata.
     * @param {ArtistMetadataCreateArgs} args - Arguments to create a ArtistMetadata.
     * @example
     * // Create one ArtistMetadata
     * const ArtistMetadata = await prisma.artistMetadata.create({
     *   data: {
     *     // ... data to create a ArtistMetadata
     *   }
     * })
     * 
     */
    create<T extends ArtistMetadataCreateArgs>(args: SelectSubset<T, ArtistMetadataCreateArgs<ExtArgs>>): Prisma__ArtistMetadataClient<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistMetadata.
     * @param {ArtistMetadataCreateManyArgs} args - Arguments to create many ArtistMetadata.
     * @example
     * // Create many ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistMetadataCreateManyArgs>(args?: SelectSubset<T, ArtistMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtistMetadata and returns the data saved in the database.
     * @param {ArtistMetadataCreateManyAndReturnArgs} args - Arguments to create many ArtistMetadata.
     * @example
     * // Create many ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtistMetadata and only return the `id`
     * const artistMetadataWithIdOnly = await prisma.artistMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtistMetadata.
     * @param {ArtistMetadataDeleteArgs} args - Arguments to delete one ArtistMetadata.
     * @example
     * // Delete one ArtistMetadata
     * const ArtistMetadata = await prisma.artistMetadata.delete({
     *   where: {
     *     // ... filter to delete one ArtistMetadata
     *   }
     * })
     * 
     */
    delete<T extends ArtistMetadataDeleteArgs>(args: SelectSubset<T, ArtistMetadataDeleteArgs<ExtArgs>>): Prisma__ArtistMetadataClient<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistMetadata.
     * @param {ArtistMetadataUpdateArgs} args - Arguments to update one ArtistMetadata.
     * @example
     * // Update one ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistMetadataUpdateArgs>(args: SelectSubset<T, ArtistMetadataUpdateArgs<ExtArgs>>): Prisma__ArtistMetadataClient<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistMetadata.
     * @param {ArtistMetadataDeleteManyArgs} args - Arguments to filter ArtistMetadata to delete.
     * @example
     * // Delete a few ArtistMetadata
     * const { count } = await prisma.artistMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistMetadataDeleteManyArgs>(args?: SelectSubset<T, ArtistMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistMetadataUpdateManyArgs>(args: SelectSubset<T, ArtistMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistMetadata and returns the data updated in the database.
     * @param {ArtistMetadataUpdateManyAndReturnArgs} args - Arguments to update many ArtistMetadata.
     * @example
     * // Update many ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtistMetadata and only return the `id`
     * const artistMetadataWithIdOnly = await prisma.artistMetadata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtistMetadata.
     * @param {ArtistMetadataUpsertArgs} args - Arguments to update or create a ArtistMetadata.
     * @example
     * // Update or create a ArtistMetadata
     * const artistMetadata = await prisma.artistMetadata.upsert({
     *   create: {
     *     // ... data to create a ArtistMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistMetadata we want to update
     *   }
     * })
     */
    upsert<T extends ArtistMetadataUpsertArgs>(args: SelectSubset<T, ArtistMetadataUpsertArgs<ExtArgs>>): Prisma__ArtistMetadataClient<$Result.GetResult<Prisma.$ArtistMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistMetadataCountArgs} args - Arguments to filter ArtistMetadata to count.
     * @example
     * // Count the number of ArtistMetadata
     * const count = await prisma.artistMetadata.count({
     *   where: {
     *     // ... the filter for the ArtistMetadata we want to count
     *   }
     * })
    **/
    count<T extends ArtistMetadataCountArgs>(
      args?: Subset<T, ArtistMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistMetadataAggregateArgs>(args: Subset<T, ArtistMetadataAggregateArgs>): Prisma.PrismaPromise<GetArtistMetadataAggregateType<T>>

    /**
     * Group by ArtistMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistMetadataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistMetadataGroupByArgs['orderBy'] }
        : { orderBy?: ArtistMetadataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistMetadata model
   */
  readonly fields: ArtistMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArtistMetadata model
   */
  interface ArtistMetadataFieldRefs {
    readonly id: FieldRef<"ArtistMetadata", 'String'>
    readonly userId: FieldRef<"ArtistMetadata", 'String'>
    readonly profileImage: FieldRef<"ArtistMetadata", 'String'>
    readonly bio: FieldRef<"ArtistMetadata", 'String'>
    readonly socialLinks: FieldRef<"ArtistMetadata", 'Json'>
    readonly totalSongs: FieldRef<"ArtistMetadata", 'Int'>
    readonly totalSales: FieldRef<"ArtistMetadata", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArtistMetadata findUnique
   */
  export type ArtistMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ArtistMetadata to fetch.
     */
    where: ArtistMetadataWhereUniqueInput
  }

  /**
   * ArtistMetadata findUniqueOrThrow
   */
  export type ArtistMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ArtistMetadata to fetch.
     */
    where: ArtistMetadataWhereUniqueInput
  }

  /**
   * ArtistMetadata findFirst
   */
  export type ArtistMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ArtistMetadata to fetch.
     */
    where?: ArtistMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistMetadata to fetch.
     */
    orderBy?: ArtistMetadataOrderByWithRelationInput | ArtistMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistMetadata.
     */
    cursor?: ArtistMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistMetadata.
     */
    distinct?: ArtistMetadataScalarFieldEnum | ArtistMetadataScalarFieldEnum[]
  }

  /**
   * ArtistMetadata findFirstOrThrow
   */
  export type ArtistMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ArtistMetadata to fetch.
     */
    where?: ArtistMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistMetadata to fetch.
     */
    orderBy?: ArtistMetadataOrderByWithRelationInput | ArtistMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistMetadata.
     */
    cursor?: ArtistMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistMetadata.
     */
    distinct?: ArtistMetadataScalarFieldEnum | ArtistMetadataScalarFieldEnum[]
  }

  /**
   * ArtistMetadata findMany
   */
  export type ArtistMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ArtistMetadata to fetch.
     */
    where?: ArtistMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistMetadata to fetch.
     */
    orderBy?: ArtistMetadataOrderByWithRelationInput | ArtistMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistMetadata.
     */
    cursor?: ArtistMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistMetadata.
     */
    skip?: number
    distinct?: ArtistMetadataScalarFieldEnum | ArtistMetadataScalarFieldEnum[]
  }

  /**
   * ArtistMetadata create
   */
  export type ArtistMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistMetadata.
     */
    data: XOR<ArtistMetadataCreateInput, ArtistMetadataUncheckedCreateInput>
  }

  /**
   * ArtistMetadata createMany
   */
  export type ArtistMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistMetadata.
     */
    data: ArtistMetadataCreateManyInput | ArtistMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtistMetadata createManyAndReturn
   */
  export type ArtistMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many ArtistMetadata.
     */
    data: ArtistMetadataCreateManyInput | ArtistMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistMetadata update
   */
  export type ArtistMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistMetadata.
     */
    data: XOR<ArtistMetadataUpdateInput, ArtistMetadataUncheckedUpdateInput>
    /**
     * Choose, which ArtistMetadata to update.
     */
    where: ArtistMetadataWhereUniqueInput
  }

  /**
   * ArtistMetadata updateMany
   */
  export type ArtistMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistMetadata.
     */
    data: XOR<ArtistMetadataUpdateManyMutationInput, ArtistMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ArtistMetadata to update
     */
    where?: ArtistMetadataWhereInput
    /**
     * Limit how many ArtistMetadata to update.
     */
    limit?: number
  }

  /**
   * ArtistMetadata updateManyAndReturn
   */
  export type ArtistMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * The data used to update ArtistMetadata.
     */
    data: XOR<ArtistMetadataUpdateManyMutationInput, ArtistMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ArtistMetadata to update
     */
    where?: ArtistMetadataWhereInput
    /**
     * Limit how many ArtistMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistMetadata upsert
   */
  export type ArtistMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistMetadata to update in case it exists.
     */
    where: ArtistMetadataWhereUniqueInput
    /**
     * In case the ArtistMetadata found by the `where` argument doesn't exist, create a new ArtistMetadata with this data.
     */
    create: XOR<ArtistMetadataCreateInput, ArtistMetadataUncheckedCreateInput>
    /**
     * In case the ArtistMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistMetadataUpdateInput, ArtistMetadataUncheckedUpdateInput>
  }

  /**
   * ArtistMetadata delete
   */
  export type ArtistMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
    /**
     * Filter which ArtistMetadata to delete.
     */
    where: ArtistMetadataWhereUniqueInput
  }

  /**
   * ArtistMetadata deleteMany
   */
  export type ArtistMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistMetadata to delete
     */
    where?: ArtistMetadataWhereInput
    /**
     * Limit how many ArtistMetadata to delete.
     */
    limit?: number
  }

  /**
   * ArtistMetadata without action
   */
  export type ArtistMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistMetadata
     */
    select?: ArtistMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistMetadata
     */
    omit?: ArtistMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistMetadataInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    songCount: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    songCount: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    songCount: number | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    songCount: number | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    createdAt: number
    songCount: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    songCount?: true
  }

  export type PlaylistSumAggregateInputType = {
    songCount?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    songCount?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    songCount?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    songCount?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    createdAt: Date | null
    songCount: number | null
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    songCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    songCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    songCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    songCount?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "createdAt" | "songCount", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    songs?: boolean | Playlist$songsArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      songs: Prisma.$PlaylistSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      createdAt: Date | null
      songCount: number | null
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    songs<T extends Playlist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly userId: FieldRef<"Playlist", 'String'>
    readonly name: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly songCount: FieldRef<"Playlist", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.songs
   */
  export type Playlist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    where?: PlaylistSongWhereInput
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    cursor?: PlaylistSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistSong
   */

  export type AggregatePlaylistSong = {
    _count: PlaylistSongCountAggregateOutputType | null
    _avg: PlaylistSongAvgAggregateOutputType | null
    _sum: PlaylistSongSumAggregateOutputType | null
    _min: PlaylistSongMinAggregateOutputType | null
    _max: PlaylistSongMaxAggregateOutputType | null
  }

  export type PlaylistSongAvgAggregateOutputType = {
    position: number | null
  }

  export type PlaylistSongSumAggregateOutputType = {
    position: number | null
  }

  export type PlaylistSongMinAggregateOutputType = {
    id: string | null
    playlistId: string | null
    songId: string | null
    position: number | null
  }

  export type PlaylistSongMaxAggregateOutputType = {
    id: string | null
    playlistId: string | null
    songId: string | null
    position: number | null
  }

  export type PlaylistSongCountAggregateOutputType = {
    id: number
    playlistId: number
    songId: number
    position: number
    _all: number
  }


  export type PlaylistSongAvgAggregateInputType = {
    position?: true
  }

  export type PlaylistSongSumAggregateInputType = {
    position?: true
  }

  export type PlaylistSongMinAggregateInputType = {
    id?: true
    playlistId?: true
    songId?: true
    position?: true
  }

  export type PlaylistSongMaxAggregateInputType = {
    id?: true
    playlistId?: true
    songId?: true
    position?: true
  }

  export type PlaylistSongCountAggregateInputType = {
    id?: true
    playlistId?: true
    songId?: true
    position?: true
    _all?: true
  }

  export type PlaylistSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistSong to aggregate.
     */
    where?: PlaylistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistSongs
    **/
    _count?: true | PlaylistSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistSongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistSongMaxAggregateInputType
  }

  export type GetPlaylistSongAggregateType<T extends PlaylistSongAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistSong[P]>
      : GetScalarType<T[P], AggregatePlaylistSong[P]>
  }




  export type PlaylistSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistSongWhereInput
    orderBy?: PlaylistSongOrderByWithAggregationInput | PlaylistSongOrderByWithAggregationInput[]
    by: PlaylistSongScalarFieldEnum[] | PlaylistSongScalarFieldEnum
    having?: PlaylistSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistSongCountAggregateInputType | true
    _avg?: PlaylistSongAvgAggregateInputType
    _sum?: PlaylistSongSumAggregateInputType
    _min?: PlaylistSongMinAggregateInputType
    _max?: PlaylistSongMaxAggregateInputType
  }

  export type PlaylistSongGroupByOutputType = {
    id: string
    playlistId: string
    songId: string
    position: number | null
    _count: PlaylistSongCountAggregateOutputType | null
    _avg: PlaylistSongAvgAggregateOutputType | null
    _sum: PlaylistSongSumAggregateOutputType | null
    _min: PlaylistSongMinAggregateOutputType | null
    _max: PlaylistSongMaxAggregateOutputType | null
  }

  type GetPlaylistSongGroupByPayload<T extends PlaylistSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistSongGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistSongGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    songId?: boolean
    position?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistSong"]>

  export type PlaylistSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    songId?: boolean
    position?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistSong"]>

  export type PlaylistSongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    songId?: boolean
    position?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistSong"]>

  export type PlaylistSongSelectScalar = {
    id?: boolean
    playlistId?: boolean
    songId?: boolean
    position?: boolean
  }

  export type PlaylistSongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlistId" | "songId" | "position", ExtArgs["result"]["playlistSong"]>
  export type PlaylistSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type PlaylistSongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type PlaylistSongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $PlaylistSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistSong"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playlistId: string
      songId: string
      position: number | null
    }, ExtArgs["result"]["playlistSong"]>
    composites: {}
  }

  type PlaylistSongGetPayload<S extends boolean | null | undefined | PlaylistSongDefaultArgs> = $Result.GetResult<Prisma.$PlaylistSongPayload, S>

  type PlaylistSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistSongCountAggregateInputType | true
    }

  export interface PlaylistSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistSong'], meta: { name: 'PlaylistSong' } }
    /**
     * Find zero or one PlaylistSong that matches the filter.
     * @param {PlaylistSongFindUniqueArgs} args - Arguments to find a PlaylistSong
     * @example
     * // Get one PlaylistSong
     * const playlistSong = await prisma.playlistSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistSongFindUniqueArgs>(args: SelectSubset<T, PlaylistSongFindUniqueArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaylistSong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistSongFindUniqueOrThrowArgs} args - Arguments to find a PlaylistSong
     * @example
     * // Get one PlaylistSong
     * const playlistSong = await prisma.playlistSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistSongFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongFindFirstArgs} args - Arguments to find a PlaylistSong
     * @example
     * // Get one PlaylistSong
     * const playlistSong = await prisma.playlistSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistSongFindFirstArgs>(args?: SelectSubset<T, PlaylistSongFindFirstArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongFindFirstOrThrowArgs} args - Arguments to find a PlaylistSong
     * @example
     * // Get one PlaylistSong
     * const playlistSong = await prisma.playlistSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistSongFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaylistSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistSongs
     * const playlistSongs = await prisma.playlistSong.findMany()
     * 
     * // Get first 10 PlaylistSongs
     * const playlistSongs = await prisma.playlistSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistSongWithIdOnly = await prisma.playlistSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistSongFindManyArgs>(args?: SelectSubset<T, PlaylistSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaylistSong.
     * @param {PlaylistSongCreateArgs} args - Arguments to create a PlaylistSong.
     * @example
     * // Create one PlaylistSong
     * const PlaylistSong = await prisma.playlistSong.create({
     *   data: {
     *     // ... data to create a PlaylistSong
     *   }
     * })
     * 
     */
    create<T extends PlaylistSongCreateArgs>(args: SelectSubset<T, PlaylistSongCreateArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaylistSongs.
     * @param {PlaylistSongCreateManyArgs} args - Arguments to create many PlaylistSongs.
     * @example
     * // Create many PlaylistSongs
     * const playlistSong = await prisma.playlistSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistSongCreateManyArgs>(args?: SelectSubset<T, PlaylistSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaylistSongs and returns the data saved in the database.
     * @param {PlaylistSongCreateManyAndReturnArgs} args - Arguments to create many PlaylistSongs.
     * @example
     * // Create many PlaylistSongs
     * const playlistSong = await prisma.playlistSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaylistSongs and only return the `id`
     * const playlistSongWithIdOnly = await prisma.playlistSong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistSongCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaylistSong.
     * @param {PlaylistSongDeleteArgs} args - Arguments to delete one PlaylistSong.
     * @example
     * // Delete one PlaylistSong
     * const PlaylistSong = await prisma.playlistSong.delete({
     *   where: {
     *     // ... filter to delete one PlaylistSong
     *   }
     * })
     * 
     */
    delete<T extends PlaylistSongDeleteArgs>(args: SelectSubset<T, PlaylistSongDeleteArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaylistSong.
     * @param {PlaylistSongUpdateArgs} args - Arguments to update one PlaylistSong.
     * @example
     * // Update one PlaylistSong
     * const playlistSong = await prisma.playlistSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistSongUpdateArgs>(args: SelectSubset<T, PlaylistSongUpdateArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaylistSongs.
     * @param {PlaylistSongDeleteManyArgs} args - Arguments to filter PlaylistSongs to delete.
     * @example
     * // Delete a few PlaylistSongs
     * const { count } = await prisma.playlistSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistSongDeleteManyArgs>(args?: SelectSubset<T, PlaylistSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistSongs
     * const playlistSong = await prisma.playlistSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistSongUpdateManyArgs>(args: SelectSubset<T, PlaylistSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistSongs and returns the data updated in the database.
     * @param {PlaylistSongUpdateManyAndReturnArgs} args - Arguments to update many PlaylistSongs.
     * @example
     * // Update many PlaylistSongs
     * const playlistSong = await prisma.playlistSong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaylistSongs and only return the `id`
     * const playlistSongWithIdOnly = await prisma.playlistSong.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistSongUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaylistSong.
     * @param {PlaylistSongUpsertArgs} args - Arguments to update or create a PlaylistSong.
     * @example
     * // Update or create a PlaylistSong
     * const playlistSong = await prisma.playlistSong.upsert({
     *   create: {
     *     // ... data to create a PlaylistSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistSong we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistSongUpsertArgs>(args: SelectSubset<T, PlaylistSongUpsertArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaylistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongCountArgs} args - Arguments to filter PlaylistSongs to count.
     * @example
     * // Count the number of PlaylistSongs
     * const count = await prisma.playlistSong.count({
     *   where: {
     *     // ... the filter for the PlaylistSongs we want to count
     *   }
     * })
    **/
    count<T extends PlaylistSongCountArgs>(
      args?: Subset<T, PlaylistSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistSongAggregateArgs>(args: Subset<T, PlaylistSongAggregateArgs>): Prisma.PrismaPromise<GetPlaylistSongAggregateType<T>>

    /**
     * Group by PlaylistSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistSongGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistSongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistSong model
   */
  readonly fields: PlaylistSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaylistSong model
   */
  interface PlaylistSongFieldRefs {
    readonly id: FieldRef<"PlaylistSong", 'String'>
    readonly playlistId: FieldRef<"PlaylistSong", 'String'>
    readonly songId: FieldRef<"PlaylistSong", 'String'>
    readonly position: FieldRef<"PlaylistSong", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistSong findUnique
   */
  export type PlaylistSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSong to fetch.
     */
    where: PlaylistSongWhereUniqueInput
  }

  /**
   * PlaylistSong findUniqueOrThrow
   */
  export type PlaylistSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSong to fetch.
     */
    where: PlaylistSongWhereUniqueInput
  }

  /**
   * PlaylistSong findFirst
   */
  export type PlaylistSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSong to fetch.
     */
    where?: PlaylistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistSongs.
     */
    cursor?: PlaylistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistSongs.
     */
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * PlaylistSong findFirstOrThrow
   */
  export type PlaylistSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSong to fetch.
     */
    where?: PlaylistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistSongs.
     */
    cursor?: PlaylistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistSongs.
     */
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * PlaylistSong findMany
   */
  export type PlaylistSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSongs to fetch.
     */
    where?: PlaylistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistSongs.
     */
    cursor?: PlaylistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * PlaylistSong create
   */
  export type PlaylistSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistSong.
     */
    data: XOR<PlaylistSongCreateInput, PlaylistSongUncheckedCreateInput>
  }

  /**
   * PlaylistSong createMany
   */
  export type PlaylistSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistSongs.
     */
    data: PlaylistSongCreateManyInput | PlaylistSongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaylistSong createManyAndReturn
   */
  export type PlaylistSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * The data used to create many PlaylistSongs.
     */
    data: PlaylistSongCreateManyInput | PlaylistSongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistSong update
   */
  export type PlaylistSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistSong.
     */
    data: XOR<PlaylistSongUpdateInput, PlaylistSongUncheckedUpdateInput>
    /**
     * Choose, which PlaylistSong to update.
     */
    where: PlaylistSongWhereUniqueInput
  }

  /**
   * PlaylistSong updateMany
   */
  export type PlaylistSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistSongs.
     */
    data: XOR<PlaylistSongUpdateManyMutationInput, PlaylistSongUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistSongs to update
     */
    where?: PlaylistSongWhereInput
    /**
     * Limit how many PlaylistSongs to update.
     */
    limit?: number
  }

  /**
   * PlaylistSong updateManyAndReturn
   */
  export type PlaylistSongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * The data used to update PlaylistSongs.
     */
    data: XOR<PlaylistSongUpdateManyMutationInput, PlaylistSongUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistSongs to update
     */
    where?: PlaylistSongWhereInput
    /**
     * Limit how many PlaylistSongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistSong upsert
   */
  export type PlaylistSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistSong to update in case it exists.
     */
    where: PlaylistSongWhereUniqueInput
    /**
     * In case the PlaylistSong found by the `where` argument doesn't exist, create a new PlaylistSong with this data.
     */
    create: XOR<PlaylistSongCreateInput, PlaylistSongUncheckedCreateInput>
    /**
     * In case the PlaylistSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistSongUpdateInput, PlaylistSongUncheckedUpdateInput>
  }

  /**
   * PlaylistSong delete
   */
  export type PlaylistSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter which PlaylistSong to delete.
     */
    where: PlaylistSongWhereUniqueInput
  }

  /**
   * PlaylistSong deleteMany
   */
  export type PlaylistSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistSongs to delete
     */
    where?: PlaylistSongWhereInput
    /**
     * Limit how many PlaylistSongs to delete.
     */
    limit?: number
  }

  /**
   * PlaylistSong without action
   */
  export type PlaylistSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteSong
   */

  export type AggregateFavoriteSong = {
    _count: FavoriteSongCountAggregateOutputType | null
    _min: FavoriteSongMinAggregateOutputType | null
    _max: FavoriteSongMaxAggregateOutputType | null
  }

  export type FavoriteSongMinAggregateOutputType = {
    id: string | null
    userId: string | null
    songId: string | null
    addedAt: Date | null
  }

  export type FavoriteSongMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    songId: string | null
    addedAt: Date | null
  }

  export type FavoriteSongCountAggregateOutputType = {
    id: number
    userId: number
    songId: number
    addedAt: number
    _all: number
  }


  export type FavoriteSongMinAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    addedAt?: true
  }

  export type FavoriteSongMaxAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    addedAt?: true
  }

  export type FavoriteSongCountAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    addedAt?: true
    _all?: true
  }

  export type FavoriteSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteSong to aggregate.
     */
    where?: FavoriteSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteSongs to fetch.
     */
    orderBy?: FavoriteSongOrderByWithRelationInput | FavoriteSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteSongs
    **/
    _count?: true | FavoriteSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteSongMaxAggregateInputType
  }

  export type GetFavoriteSongAggregateType<T extends FavoriteSongAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteSong[P]>
      : GetScalarType<T[P], AggregateFavoriteSong[P]>
  }




  export type FavoriteSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteSongWhereInput
    orderBy?: FavoriteSongOrderByWithAggregationInput | FavoriteSongOrderByWithAggregationInput[]
    by: FavoriteSongScalarFieldEnum[] | FavoriteSongScalarFieldEnum
    having?: FavoriteSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteSongCountAggregateInputType | true
    _min?: FavoriteSongMinAggregateInputType
    _max?: FavoriteSongMaxAggregateInputType
  }

  export type FavoriteSongGroupByOutputType = {
    id: string
    userId: string
    songId: string
    addedAt: Date | null
    _count: FavoriteSongCountAggregateOutputType | null
    _min: FavoriteSongMinAggregateOutputType | null
    _max: FavoriteSongMaxAggregateOutputType | null
  }

  type GetFavoriteSongGroupByPayload<T extends FavoriteSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteSongGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteSongGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteSong"]>

  export type FavoriteSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteSong"]>

  export type FavoriteSongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteSong"]>

  export type FavoriteSongSelectScalar = {
    id?: boolean
    userId?: boolean
    songId?: boolean
    addedAt?: boolean
  }

  export type FavoriteSongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "songId" | "addedAt", ExtArgs["result"]["favoriteSong"]>
  export type FavoriteSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type FavoriteSongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type FavoriteSongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $FavoriteSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteSong"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      songId: string
      addedAt: Date | null
    }, ExtArgs["result"]["favoriteSong"]>
    composites: {}
  }

  type FavoriteSongGetPayload<S extends boolean | null | undefined | FavoriteSongDefaultArgs> = $Result.GetResult<Prisma.$FavoriteSongPayload, S>

  type FavoriteSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteSongCountAggregateInputType | true
    }

  export interface FavoriteSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteSong'], meta: { name: 'FavoriteSong' } }
    /**
     * Find zero or one FavoriteSong that matches the filter.
     * @param {FavoriteSongFindUniqueArgs} args - Arguments to find a FavoriteSong
     * @example
     * // Get one FavoriteSong
     * const favoriteSong = await prisma.favoriteSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteSongFindUniqueArgs>(args: SelectSubset<T, FavoriteSongFindUniqueArgs<ExtArgs>>): Prisma__FavoriteSongClient<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteSong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteSongFindUniqueOrThrowArgs} args - Arguments to find a FavoriteSong
     * @example
     * // Get one FavoriteSong
     * const favoriteSong = await prisma.favoriteSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteSongFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteSongClient<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSongFindFirstArgs} args - Arguments to find a FavoriteSong
     * @example
     * // Get one FavoriteSong
     * const favoriteSong = await prisma.favoriteSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteSongFindFirstArgs>(args?: SelectSubset<T, FavoriteSongFindFirstArgs<ExtArgs>>): Prisma__FavoriteSongClient<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSongFindFirstOrThrowArgs} args - Arguments to find a FavoriteSong
     * @example
     * // Get one FavoriteSong
     * const favoriteSong = await prisma.favoriteSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteSongFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteSongClient<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteSongs
     * const favoriteSongs = await prisma.favoriteSong.findMany()
     * 
     * // Get first 10 FavoriteSongs
     * const favoriteSongs = await prisma.favoriteSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteSongWithIdOnly = await prisma.favoriteSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteSongFindManyArgs>(args?: SelectSubset<T, FavoriteSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteSong.
     * @param {FavoriteSongCreateArgs} args - Arguments to create a FavoriteSong.
     * @example
     * // Create one FavoriteSong
     * const FavoriteSong = await prisma.favoriteSong.create({
     *   data: {
     *     // ... data to create a FavoriteSong
     *   }
     * })
     * 
     */
    create<T extends FavoriteSongCreateArgs>(args: SelectSubset<T, FavoriteSongCreateArgs<ExtArgs>>): Prisma__FavoriteSongClient<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteSongs.
     * @param {FavoriteSongCreateManyArgs} args - Arguments to create many FavoriteSongs.
     * @example
     * // Create many FavoriteSongs
     * const favoriteSong = await prisma.favoriteSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteSongCreateManyArgs>(args?: SelectSubset<T, FavoriteSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteSongs and returns the data saved in the database.
     * @param {FavoriteSongCreateManyAndReturnArgs} args - Arguments to create many FavoriteSongs.
     * @example
     * // Create many FavoriteSongs
     * const favoriteSong = await prisma.favoriteSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteSongs and only return the `id`
     * const favoriteSongWithIdOnly = await prisma.favoriteSong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteSongCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteSong.
     * @param {FavoriteSongDeleteArgs} args - Arguments to delete one FavoriteSong.
     * @example
     * // Delete one FavoriteSong
     * const FavoriteSong = await prisma.favoriteSong.delete({
     *   where: {
     *     // ... filter to delete one FavoriteSong
     *   }
     * })
     * 
     */
    delete<T extends FavoriteSongDeleteArgs>(args: SelectSubset<T, FavoriteSongDeleteArgs<ExtArgs>>): Prisma__FavoriteSongClient<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteSong.
     * @param {FavoriteSongUpdateArgs} args - Arguments to update one FavoriteSong.
     * @example
     * // Update one FavoriteSong
     * const favoriteSong = await prisma.favoriteSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteSongUpdateArgs>(args: SelectSubset<T, FavoriteSongUpdateArgs<ExtArgs>>): Prisma__FavoriteSongClient<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteSongs.
     * @param {FavoriteSongDeleteManyArgs} args - Arguments to filter FavoriteSongs to delete.
     * @example
     * // Delete a few FavoriteSongs
     * const { count } = await prisma.favoriteSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteSongDeleteManyArgs>(args?: SelectSubset<T, FavoriteSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteSongs
     * const favoriteSong = await prisma.favoriteSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteSongUpdateManyArgs>(args: SelectSubset<T, FavoriteSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteSongs and returns the data updated in the database.
     * @param {FavoriteSongUpdateManyAndReturnArgs} args - Arguments to update many FavoriteSongs.
     * @example
     * // Update many FavoriteSongs
     * const favoriteSong = await prisma.favoriteSong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteSongs and only return the `id`
     * const favoriteSongWithIdOnly = await prisma.favoriteSong.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteSongUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteSong.
     * @param {FavoriteSongUpsertArgs} args - Arguments to update or create a FavoriteSong.
     * @example
     * // Update or create a FavoriteSong
     * const favoriteSong = await prisma.favoriteSong.upsert({
     *   create: {
     *     // ... data to create a FavoriteSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteSong we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteSongUpsertArgs>(args: SelectSubset<T, FavoriteSongUpsertArgs<ExtArgs>>): Prisma__FavoriteSongClient<$Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSongCountArgs} args - Arguments to filter FavoriteSongs to count.
     * @example
     * // Count the number of FavoriteSongs
     * const count = await prisma.favoriteSong.count({
     *   where: {
     *     // ... the filter for the FavoriteSongs we want to count
     *   }
     * })
    **/
    count<T extends FavoriteSongCountArgs>(
      args?: Subset<T, FavoriteSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteSongAggregateArgs>(args: Subset<T, FavoriteSongAggregateArgs>): Prisma.PrismaPromise<GetFavoriteSongAggregateType<T>>

    /**
     * Group by FavoriteSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteSongGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteSongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteSong model
   */
  readonly fields: FavoriteSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteSong model
   */
  interface FavoriteSongFieldRefs {
    readonly id: FieldRef<"FavoriteSong", 'String'>
    readonly userId: FieldRef<"FavoriteSong", 'String'>
    readonly songId: FieldRef<"FavoriteSong", 'String'>
    readonly addedAt: FieldRef<"FavoriteSong", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteSong findUnique
   */
  export type FavoriteSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSong to fetch.
     */
    where: FavoriteSongWhereUniqueInput
  }

  /**
   * FavoriteSong findUniqueOrThrow
   */
  export type FavoriteSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSong to fetch.
     */
    where: FavoriteSongWhereUniqueInput
  }

  /**
   * FavoriteSong findFirst
   */
  export type FavoriteSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSong to fetch.
     */
    where?: FavoriteSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteSongs to fetch.
     */
    orderBy?: FavoriteSongOrderByWithRelationInput | FavoriteSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteSongs.
     */
    cursor?: FavoriteSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteSongs.
     */
    distinct?: FavoriteSongScalarFieldEnum | FavoriteSongScalarFieldEnum[]
  }

  /**
   * FavoriteSong findFirstOrThrow
   */
  export type FavoriteSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSong to fetch.
     */
    where?: FavoriteSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteSongs to fetch.
     */
    orderBy?: FavoriteSongOrderByWithRelationInput | FavoriteSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteSongs.
     */
    cursor?: FavoriteSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteSongs.
     */
    distinct?: FavoriteSongScalarFieldEnum | FavoriteSongScalarFieldEnum[]
  }

  /**
   * FavoriteSong findMany
   */
  export type FavoriteSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSongs to fetch.
     */
    where?: FavoriteSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteSongs to fetch.
     */
    orderBy?: FavoriteSongOrderByWithRelationInput | FavoriteSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteSongs.
     */
    cursor?: FavoriteSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteSongs.
     */
    skip?: number
    distinct?: FavoriteSongScalarFieldEnum | FavoriteSongScalarFieldEnum[]
  }

  /**
   * FavoriteSong create
   */
  export type FavoriteSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteSong.
     */
    data: XOR<FavoriteSongCreateInput, FavoriteSongUncheckedCreateInput>
  }

  /**
   * FavoriteSong createMany
   */
  export type FavoriteSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteSongs.
     */
    data: FavoriteSongCreateManyInput | FavoriteSongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteSong createManyAndReturn
   */
  export type FavoriteSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteSongs.
     */
    data: FavoriteSongCreateManyInput | FavoriteSongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteSong update
   */
  export type FavoriteSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteSong.
     */
    data: XOR<FavoriteSongUpdateInput, FavoriteSongUncheckedUpdateInput>
    /**
     * Choose, which FavoriteSong to update.
     */
    where: FavoriteSongWhereUniqueInput
  }

  /**
   * FavoriteSong updateMany
   */
  export type FavoriteSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteSongs.
     */
    data: XOR<FavoriteSongUpdateManyMutationInput, FavoriteSongUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteSongs to update
     */
    where?: FavoriteSongWhereInput
    /**
     * Limit how many FavoriteSongs to update.
     */
    limit?: number
  }

  /**
   * FavoriteSong updateManyAndReturn
   */
  export type FavoriteSongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteSongs.
     */
    data: XOR<FavoriteSongUpdateManyMutationInput, FavoriteSongUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteSongs to update
     */
    where?: FavoriteSongWhereInput
    /**
     * Limit how many FavoriteSongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteSong upsert
   */
  export type FavoriteSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteSong to update in case it exists.
     */
    where: FavoriteSongWhereUniqueInput
    /**
     * In case the FavoriteSong found by the `where` argument doesn't exist, create a new FavoriteSong with this data.
     */
    create: XOR<FavoriteSongCreateInput, FavoriteSongUncheckedCreateInput>
    /**
     * In case the FavoriteSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteSongUpdateInput, FavoriteSongUncheckedUpdateInput>
  }

  /**
   * FavoriteSong delete
   */
  export type FavoriteSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
    /**
     * Filter which FavoriteSong to delete.
     */
    where: FavoriteSongWhereUniqueInput
  }

  /**
   * FavoriteSong deleteMany
   */
  export type FavoriteSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteSongs to delete
     */
    where?: FavoriteSongWhereInput
    /**
     * Limit how many FavoriteSongs to delete.
     */
    limit?: number
  }

  /**
   * FavoriteSong without action
   */
  export type FavoriteSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSong
     */
    select?: FavoriteSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSong
     */
    omit?: FavoriteSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSongInclude<ExtArgs> | null
  }


  /**
   * Model LikedSong
   */

  export type AggregateLikedSong = {
    _count: LikedSongCountAggregateOutputType | null
    _min: LikedSongMinAggregateOutputType | null
    _max: LikedSongMaxAggregateOutputType | null
  }

  export type LikedSongMinAggregateOutputType = {
    id: string | null
    userId: string | null
    songId: string | null
    likedAt: Date | null
  }

  export type LikedSongMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    songId: string | null
    likedAt: Date | null
  }

  export type LikedSongCountAggregateOutputType = {
    id: number
    userId: number
    songId: number
    likedAt: number
    _all: number
  }


  export type LikedSongMinAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    likedAt?: true
  }

  export type LikedSongMaxAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    likedAt?: true
  }

  export type LikedSongCountAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    likedAt?: true
    _all?: true
  }

  export type LikedSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedSong to aggregate.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedSongs
    **/
    _count?: true | LikedSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedSongMaxAggregateInputType
  }

  export type GetLikedSongAggregateType<T extends LikedSongAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedSong[P]>
      : GetScalarType<T[P], AggregateLikedSong[P]>
  }




  export type LikedSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongWhereInput
    orderBy?: LikedSongOrderByWithAggregationInput | LikedSongOrderByWithAggregationInput[]
    by: LikedSongScalarFieldEnum[] | LikedSongScalarFieldEnum
    having?: LikedSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedSongCountAggregateInputType | true
    _min?: LikedSongMinAggregateInputType
    _max?: LikedSongMaxAggregateInputType
  }

  export type LikedSongGroupByOutputType = {
    id: string
    userId: string
    songId: string
    likedAt: Date | null
    _count: LikedSongCountAggregateOutputType | null
    _min: LikedSongMinAggregateOutputType | null
    _max: LikedSongMaxAggregateOutputType | null
  }

  type GetLikedSongGroupByPayload<T extends LikedSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedSongGroupByOutputType[P]>
            : GetScalarType<T[P], LikedSongGroupByOutputType[P]>
        }
      >
    >


  export type LikedSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    likedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedSong"]>

  export type LikedSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    likedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedSong"]>

  export type LikedSongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    likedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedSong"]>

  export type LikedSongSelectScalar = {
    id?: boolean
    userId?: boolean
    songId?: boolean
    likedAt?: boolean
  }

  export type LikedSongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "songId" | "likedAt", ExtArgs["result"]["likedSong"]>
  export type LikedSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type LikedSongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type LikedSongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $LikedSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedSong"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      songId: string
      likedAt: Date | null
    }, ExtArgs["result"]["likedSong"]>
    composites: {}
  }

  type LikedSongGetPayload<S extends boolean | null | undefined | LikedSongDefaultArgs> = $Result.GetResult<Prisma.$LikedSongPayload, S>

  type LikedSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedSongCountAggregateInputType | true
    }

  export interface LikedSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedSong'], meta: { name: 'LikedSong' } }
    /**
     * Find zero or one LikedSong that matches the filter.
     * @param {LikedSongFindUniqueArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedSongFindUniqueArgs>(args: SelectSubset<T, LikedSongFindUniqueArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikedSong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedSongFindUniqueOrThrowArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedSongFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongFindFirstArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedSongFindFirstArgs>(args?: SelectSubset<T, LikedSongFindFirstArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikedSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongFindFirstOrThrowArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedSongFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikedSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedSongs
     * const likedSongs = await prisma.likedSong.findMany()
     * 
     * // Get first 10 LikedSongs
     * const likedSongs = await prisma.likedSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedSongWithIdOnly = await prisma.likedSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedSongFindManyArgs>(args?: SelectSubset<T, LikedSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikedSong.
     * @param {LikedSongCreateArgs} args - Arguments to create a LikedSong.
     * @example
     * // Create one LikedSong
     * const LikedSong = await prisma.likedSong.create({
     *   data: {
     *     // ... data to create a LikedSong
     *   }
     * })
     * 
     */
    create<T extends LikedSongCreateArgs>(args: SelectSubset<T, LikedSongCreateArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikedSongs.
     * @param {LikedSongCreateManyArgs} args - Arguments to create many LikedSongs.
     * @example
     * // Create many LikedSongs
     * const likedSong = await prisma.likedSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedSongCreateManyArgs>(args?: SelectSubset<T, LikedSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedSongs and returns the data saved in the database.
     * @param {LikedSongCreateManyAndReturnArgs} args - Arguments to create many LikedSongs.
     * @example
     * // Create many LikedSongs
     * const likedSong = await prisma.likedSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedSongs and only return the `id`
     * const likedSongWithIdOnly = await prisma.likedSong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedSongCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikedSong.
     * @param {LikedSongDeleteArgs} args - Arguments to delete one LikedSong.
     * @example
     * // Delete one LikedSong
     * const LikedSong = await prisma.likedSong.delete({
     *   where: {
     *     // ... filter to delete one LikedSong
     *   }
     * })
     * 
     */
    delete<T extends LikedSongDeleteArgs>(args: SelectSubset<T, LikedSongDeleteArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikedSong.
     * @param {LikedSongUpdateArgs} args - Arguments to update one LikedSong.
     * @example
     * // Update one LikedSong
     * const likedSong = await prisma.likedSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedSongUpdateArgs>(args: SelectSubset<T, LikedSongUpdateArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikedSongs.
     * @param {LikedSongDeleteManyArgs} args - Arguments to filter LikedSongs to delete.
     * @example
     * // Delete a few LikedSongs
     * const { count } = await prisma.likedSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedSongDeleteManyArgs>(args?: SelectSubset<T, LikedSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedSongs
     * const likedSong = await prisma.likedSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedSongUpdateManyArgs>(args: SelectSubset<T, LikedSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedSongs and returns the data updated in the database.
     * @param {LikedSongUpdateManyAndReturnArgs} args - Arguments to update many LikedSongs.
     * @example
     * // Update many LikedSongs
     * const likedSong = await prisma.likedSong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikedSongs and only return the `id`
     * const likedSongWithIdOnly = await prisma.likedSong.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikedSongUpdateManyAndReturnArgs>(args: SelectSubset<T, LikedSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikedSong.
     * @param {LikedSongUpsertArgs} args - Arguments to update or create a LikedSong.
     * @example
     * // Update or create a LikedSong
     * const likedSong = await prisma.likedSong.upsert({
     *   create: {
     *     // ... data to create a LikedSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedSong we want to update
     *   }
     * })
     */
    upsert<T extends LikedSongUpsertArgs>(args: SelectSubset<T, LikedSongUpsertArgs<ExtArgs>>): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongCountArgs} args - Arguments to filter LikedSongs to count.
     * @example
     * // Count the number of LikedSongs
     * const count = await prisma.likedSong.count({
     *   where: {
     *     // ... the filter for the LikedSongs we want to count
     *   }
     * })
    **/
    count<T extends LikedSongCountArgs>(
      args?: Subset<T, LikedSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedSongAggregateArgs>(args: Subset<T, LikedSongAggregateArgs>): Prisma.PrismaPromise<GetLikedSongAggregateType<T>>

    /**
     * Group by LikedSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedSongGroupByArgs['orderBy'] }
        : { orderBy?: LikedSongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedSong model
   */
  readonly fields: LikedSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LikedSong model
   */
  interface LikedSongFieldRefs {
    readonly id: FieldRef<"LikedSong", 'String'>
    readonly userId: FieldRef<"LikedSong", 'String'>
    readonly songId: FieldRef<"LikedSong", 'String'>
    readonly likedAt: FieldRef<"LikedSong", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedSong findUnique
   */
  export type LikedSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where: LikedSongWhereUniqueInput
  }

  /**
   * LikedSong findUniqueOrThrow
   */
  export type LikedSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where: LikedSongWhereUniqueInput
  }

  /**
   * LikedSong findFirst
   */
  export type LikedSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedSongs.
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedSongs.
     */
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * LikedSong findFirstOrThrow
   */
  export type LikedSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedSongs.
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedSongs.
     */
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * LikedSong findMany
   */
  export type LikedSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSongs to fetch.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedSongs.
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }

  /**
   * LikedSong create
   */
  export type LikedSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedSong.
     */
    data: XOR<LikedSongCreateInput, LikedSongUncheckedCreateInput>
  }

  /**
   * LikedSong createMany
   */
  export type LikedSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedSongs.
     */
    data: LikedSongCreateManyInput | LikedSongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedSong createManyAndReturn
   */
  export type LikedSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * The data used to create many LikedSongs.
     */
    data: LikedSongCreateManyInput | LikedSongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedSong update
   */
  export type LikedSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedSong.
     */
    data: XOR<LikedSongUpdateInput, LikedSongUncheckedUpdateInput>
    /**
     * Choose, which LikedSong to update.
     */
    where: LikedSongWhereUniqueInput
  }

  /**
   * LikedSong updateMany
   */
  export type LikedSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedSongs.
     */
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyInput>
    /**
     * Filter which LikedSongs to update
     */
    where?: LikedSongWhereInput
    /**
     * Limit how many LikedSongs to update.
     */
    limit?: number
  }

  /**
   * LikedSong updateManyAndReturn
   */
  export type LikedSongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * The data used to update LikedSongs.
     */
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyInput>
    /**
     * Filter which LikedSongs to update
     */
    where?: LikedSongWhereInput
    /**
     * Limit how many LikedSongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedSong upsert
   */
  export type LikedSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedSong to update in case it exists.
     */
    where: LikedSongWhereUniqueInput
    /**
     * In case the LikedSong found by the `where` argument doesn't exist, create a new LikedSong with this data.
     */
    create: XOR<LikedSongCreateInput, LikedSongUncheckedCreateInput>
    /**
     * In case the LikedSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedSongUpdateInput, LikedSongUncheckedUpdateInput>
  }

  /**
   * LikedSong delete
   */
  export type LikedSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter which LikedSong to delete.
     */
    where: LikedSongWhereUniqueInput
  }

  /**
   * LikedSong deleteMany
   */
  export type LikedSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedSongs to delete
     */
    where?: LikedSongWhereInput
    /**
     * Limit how many LikedSongs to delete.
     */
    limit?: number
  }

  /**
   * LikedSong without action
   */
  export type LikedSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedSong
     */
    omit?: LikedSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedSongInclude<ExtArgs> | null
  }


  /**
   * Model SongStats
   */

  export type AggregateSongStats = {
    _count: SongStatsCountAggregateOutputType | null
    _avg: SongStatsAvgAggregateOutputType | null
    _sum: SongStatsSumAggregateOutputType | null
    _min: SongStatsMinAggregateOutputType | null
    _max: SongStatsMaxAggregateOutputType | null
  }

  export type SongStatsAvgAggregateOutputType = {
    playCount: number | null
    favoriteCount: number | null
    likeCount: number | null
  }

  export type SongStatsSumAggregateOutputType = {
    playCount: number | null
    favoriteCount: number | null
    likeCount: number | null
  }

  export type SongStatsMinAggregateOutputType = {
    id: string | null
    songId: string | null
    playCount: number | null
    favoriteCount: number | null
    likeCount: number | null
    lastPlayed: Date | null
  }

  export type SongStatsMaxAggregateOutputType = {
    id: string | null
    songId: string | null
    playCount: number | null
    favoriteCount: number | null
    likeCount: number | null
    lastPlayed: Date | null
  }

  export type SongStatsCountAggregateOutputType = {
    id: number
    songId: number
    playCount: number
    favoriteCount: number
    likeCount: number
    lastPlayed: number
    _all: number
  }


  export type SongStatsAvgAggregateInputType = {
    playCount?: true
    favoriteCount?: true
    likeCount?: true
  }

  export type SongStatsSumAggregateInputType = {
    playCount?: true
    favoriteCount?: true
    likeCount?: true
  }

  export type SongStatsMinAggregateInputType = {
    id?: true
    songId?: true
    playCount?: true
    favoriteCount?: true
    likeCount?: true
    lastPlayed?: true
  }

  export type SongStatsMaxAggregateInputType = {
    id?: true
    songId?: true
    playCount?: true
    favoriteCount?: true
    likeCount?: true
    lastPlayed?: true
  }

  export type SongStatsCountAggregateInputType = {
    id?: true
    songId?: true
    playCount?: true
    favoriteCount?: true
    likeCount?: true
    lastPlayed?: true
    _all?: true
  }

  export type SongStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongStats to aggregate.
     */
    where?: SongStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongStats to fetch.
     */
    orderBy?: SongStatsOrderByWithRelationInput | SongStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongStats
    **/
    _count?: true | SongStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongStatsMaxAggregateInputType
  }

  export type GetSongStatsAggregateType<T extends SongStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateSongStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongStats[P]>
      : GetScalarType<T[P], AggregateSongStats[P]>
  }




  export type SongStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongStatsWhereInput
    orderBy?: SongStatsOrderByWithAggregationInput | SongStatsOrderByWithAggregationInput[]
    by: SongStatsScalarFieldEnum[] | SongStatsScalarFieldEnum
    having?: SongStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongStatsCountAggregateInputType | true
    _avg?: SongStatsAvgAggregateInputType
    _sum?: SongStatsSumAggregateInputType
    _min?: SongStatsMinAggregateInputType
    _max?: SongStatsMaxAggregateInputType
  }

  export type SongStatsGroupByOutputType = {
    id: string
    songId: string
    playCount: number | null
    favoriteCount: number | null
    likeCount: number | null
    lastPlayed: Date | null
    _count: SongStatsCountAggregateOutputType | null
    _avg: SongStatsAvgAggregateOutputType | null
    _sum: SongStatsSumAggregateOutputType | null
    _min: SongStatsMinAggregateOutputType | null
    _max: SongStatsMaxAggregateOutputType | null
  }

  type GetSongStatsGroupByPayload<T extends SongStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongStatsGroupByOutputType[P]>
            : GetScalarType<T[P], SongStatsGroupByOutputType[P]>
        }
      >
    >


  export type SongStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    playCount?: boolean
    favoriteCount?: boolean
    likeCount?: boolean
    lastPlayed?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songStats"]>

  export type SongStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    playCount?: boolean
    favoriteCount?: boolean
    likeCount?: boolean
    lastPlayed?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songStats"]>

  export type SongStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    playCount?: boolean
    favoriteCount?: boolean
    likeCount?: boolean
    lastPlayed?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songStats"]>

  export type SongStatsSelectScalar = {
    id?: boolean
    songId?: boolean
    playCount?: boolean
    favoriteCount?: boolean
    likeCount?: boolean
    lastPlayed?: boolean
  }

  export type SongStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "songId" | "playCount" | "favoriteCount" | "likeCount" | "lastPlayed", ExtArgs["result"]["songStats"]>
  export type SongStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type SongStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type SongStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $SongStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SongStats"
    objects: {
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      songId: string
      playCount: number | null
      favoriteCount: number | null
      likeCount: number | null
      lastPlayed: Date | null
    }, ExtArgs["result"]["songStats"]>
    composites: {}
  }

  type SongStatsGetPayload<S extends boolean | null | undefined | SongStatsDefaultArgs> = $Result.GetResult<Prisma.$SongStatsPayload, S>

  type SongStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongStatsCountAggregateInputType | true
    }

  export interface SongStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongStats'], meta: { name: 'SongStats' } }
    /**
     * Find zero or one SongStats that matches the filter.
     * @param {SongStatsFindUniqueArgs} args - Arguments to find a SongStats
     * @example
     * // Get one SongStats
     * const songStats = await prisma.songStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongStatsFindUniqueArgs>(args: SelectSubset<T, SongStatsFindUniqueArgs<ExtArgs>>): Prisma__SongStatsClient<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SongStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongStatsFindUniqueOrThrowArgs} args - Arguments to find a SongStats
     * @example
     * // Get one SongStats
     * const songStats = await prisma.songStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, SongStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongStatsClient<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongStatsFindFirstArgs} args - Arguments to find a SongStats
     * @example
     * // Get one SongStats
     * const songStats = await prisma.songStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongStatsFindFirstArgs>(args?: SelectSubset<T, SongStatsFindFirstArgs<ExtArgs>>): Prisma__SongStatsClient<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongStatsFindFirstOrThrowArgs} args - Arguments to find a SongStats
     * @example
     * // Get one SongStats
     * const songStats = await prisma.songStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, SongStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongStatsClient<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SongStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongStats
     * const songStats = await prisma.songStats.findMany()
     * 
     * // Get first 10 SongStats
     * const songStats = await prisma.songStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songStatsWithIdOnly = await prisma.songStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongStatsFindManyArgs>(args?: SelectSubset<T, SongStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SongStats.
     * @param {SongStatsCreateArgs} args - Arguments to create a SongStats.
     * @example
     * // Create one SongStats
     * const SongStats = await prisma.songStats.create({
     *   data: {
     *     // ... data to create a SongStats
     *   }
     * })
     * 
     */
    create<T extends SongStatsCreateArgs>(args: SelectSubset<T, SongStatsCreateArgs<ExtArgs>>): Prisma__SongStatsClient<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SongStats.
     * @param {SongStatsCreateManyArgs} args - Arguments to create many SongStats.
     * @example
     * // Create many SongStats
     * const songStats = await prisma.songStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongStatsCreateManyArgs>(args?: SelectSubset<T, SongStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SongStats and returns the data saved in the database.
     * @param {SongStatsCreateManyAndReturnArgs} args - Arguments to create many SongStats.
     * @example
     * // Create many SongStats
     * const songStats = await prisma.songStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SongStats and only return the `id`
     * const songStatsWithIdOnly = await prisma.songStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, SongStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SongStats.
     * @param {SongStatsDeleteArgs} args - Arguments to delete one SongStats.
     * @example
     * // Delete one SongStats
     * const SongStats = await prisma.songStats.delete({
     *   where: {
     *     // ... filter to delete one SongStats
     *   }
     * })
     * 
     */
    delete<T extends SongStatsDeleteArgs>(args: SelectSubset<T, SongStatsDeleteArgs<ExtArgs>>): Prisma__SongStatsClient<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SongStats.
     * @param {SongStatsUpdateArgs} args - Arguments to update one SongStats.
     * @example
     * // Update one SongStats
     * const songStats = await prisma.songStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongStatsUpdateArgs>(args: SelectSubset<T, SongStatsUpdateArgs<ExtArgs>>): Prisma__SongStatsClient<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SongStats.
     * @param {SongStatsDeleteManyArgs} args - Arguments to filter SongStats to delete.
     * @example
     * // Delete a few SongStats
     * const { count } = await prisma.songStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongStatsDeleteManyArgs>(args?: SelectSubset<T, SongStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongStats
     * const songStats = await prisma.songStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongStatsUpdateManyArgs>(args: SelectSubset<T, SongStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongStats and returns the data updated in the database.
     * @param {SongStatsUpdateManyAndReturnArgs} args - Arguments to update many SongStats.
     * @example
     * // Update many SongStats
     * const songStats = await prisma.songStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SongStats and only return the `id`
     * const songStatsWithIdOnly = await prisma.songStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, SongStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SongStats.
     * @param {SongStatsUpsertArgs} args - Arguments to update or create a SongStats.
     * @example
     * // Update or create a SongStats
     * const songStats = await prisma.songStats.upsert({
     *   create: {
     *     // ... data to create a SongStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongStats we want to update
     *   }
     * })
     */
    upsert<T extends SongStatsUpsertArgs>(args: SelectSubset<T, SongStatsUpsertArgs<ExtArgs>>): Prisma__SongStatsClient<$Result.GetResult<Prisma.$SongStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SongStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongStatsCountArgs} args - Arguments to filter SongStats to count.
     * @example
     * // Count the number of SongStats
     * const count = await prisma.songStats.count({
     *   where: {
     *     // ... the filter for the SongStats we want to count
     *   }
     * })
    **/
    count<T extends SongStatsCountArgs>(
      args?: Subset<T, SongStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongStatsAggregateArgs>(args: Subset<T, SongStatsAggregateArgs>): Prisma.PrismaPromise<GetSongStatsAggregateType<T>>

    /**
     * Group by SongStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongStatsGroupByArgs['orderBy'] }
        : { orderBy?: SongStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SongStats model
   */
  readonly fields: SongStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SongStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SongStats model
   */
  interface SongStatsFieldRefs {
    readonly id: FieldRef<"SongStats", 'String'>
    readonly songId: FieldRef<"SongStats", 'String'>
    readonly playCount: FieldRef<"SongStats", 'Int'>
    readonly favoriteCount: FieldRef<"SongStats", 'Int'>
    readonly likeCount: FieldRef<"SongStats", 'Int'>
    readonly lastPlayed: FieldRef<"SongStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SongStats findUnique
   */
  export type SongStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    /**
     * Filter, which SongStats to fetch.
     */
    where: SongStatsWhereUniqueInput
  }

  /**
   * SongStats findUniqueOrThrow
   */
  export type SongStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    /**
     * Filter, which SongStats to fetch.
     */
    where: SongStatsWhereUniqueInput
  }

  /**
   * SongStats findFirst
   */
  export type SongStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    /**
     * Filter, which SongStats to fetch.
     */
    where?: SongStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongStats to fetch.
     */
    orderBy?: SongStatsOrderByWithRelationInput | SongStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongStats.
     */
    cursor?: SongStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongStats.
     */
    distinct?: SongStatsScalarFieldEnum | SongStatsScalarFieldEnum[]
  }

  /**
   * SongStats findFirstOrThrow
   */
  export type SongStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    /**
     * Filter, which SongStats to fetch.
     */
    where?: SongStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongStats to fetch.
     */
    orderBy?: SongStatsOrderByWithRelationInput | SongStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongStats.
     */
    cursor?: SongStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongStats.
     */
    distinct?: SongStatsScalarFieldEnum | SongStatsScalarFieldEnum[]
  }

  /**
   * SongStats findMany
   */
  export type SongStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    /**
     * Filter, which SongStats to fetch.
     */
    where?: SongStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongStats to fetch.
     */
    orderBy?: SongStatsOrderByWithRelationInput | SongStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongStats.
     */
    cursor?: SongStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongStats.
     */
    skip?: number
    distinct?: SongStatsScalarFieldEnum | SongStatsScalarFieldEnum[]
  }

  /**
   * SongStats create
   */
  export type SongStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a SongStats.
     */
    data: XOR<SongStatsCreateInput, SongStatsUncheckedCreateInput>
  }

  /**
   * SongStats createMany
   */
  export type SongStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongStats.
     */
    data: SongStatsCreateManyInput | SongStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SongStats createManyAndReturn
   */
  export type SongStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * The data used to create many SongStats.
     */
    data: SongStatsCreateManyInput | SongStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongStats update
   */
  export type SongStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a SongStats.
     */
    data: XOR<SongStatsUpdateInput, SongStatsUncheckedUpdateInput>
    /**
     * Choose, which SongStats to update.
     */
    where: SongStatsWhereUniqueInput
  }

  /**
   * SongStats updateMany
   */
  export type SongStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongStats.
     */
    data: XOR<SongStatsUpdateManyMutationInput, SongStatsUncheckedUpdateManyInput>
    /**
     * Filter which SongStats to update
     */
    where?: SongStatsWhereInput
    /**
     * Limit how many SongStats to update.
     */
    limit?: number
  }

  /**
   * SongStats updateManyAndReturn
   */
  export type SongStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * The data used to update SongStats.
     */
    data: XOR<SongStatsUpdateManyMutationInput, SongStatsUncheckedUpdateManyInput>
    /**
     * Filter which SongStats to update
     */
    where?: SongStatsWhereInput
    /**
     * Limit how many SongStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongStats upsert
   */
  export type SongStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the SongStats to update in case it exists.
     */
    where: SongStatsWhereUniqueInput
    /**
     * In case the SongStats found by the `where` argument doesn't exist, create a new SongStats with this data.
     */
    create: XOR<SongStatsCreateInput, SongStatsUncheckedCreateInput>
    /**
     * In case the SongStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongStatsUpdateInput, SongStatsUncheckedUpdateInput>
  }

  /**
   * SongStats delete
   */
  export type SongStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
    /**
     * Filter which SongStats to delete.
     */
    where: SongStatsWhereUniqueInput
  }

  /**
   * SongStats deleteMany
   */
  export type SongStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongStats to delete
     */
    where?: SongStatsWhereInput
    /**
     * Limit how many SongStats to delete.
     */
    limit?: number
  }

  /**
   * SongStats without action
   */
  export type SongStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongStats
     */
    select?: SongStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongStats
     */
    omit?: SongStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongStatsInclude<ExtArgs> | null
  }


  /**
   * Model PlatformStats
   */

  export type AggregatePlatformStats = {
    _count: PlatformStatsCountAggregateOutputType | null
    _avg: PlatformStatsAvgAggregateOutputType | null
    _sum: PlatformStatsSumAggregateOutputType | null
    _min: PlatformStatsMinAggregateOutputType | null
    _max: PlatformStatsMaxAggregateOutputType | null
  }

  export type PlatformStatsAvgAggregateOutputType = {
    totalSongs: number | null
    totalUsers: number | null
    totalArtists: number | null
    totalPlays: number | null
    totalSales: number | null
    totalSalesVolume: Decimal | null
  }

  export type PlatformStatsSumAggregateOutputType = {
    totalSongs: number | null
    totalUsers: number | null
    totalArtists: number | null
    totalPlays: number | null
    totalSales: number | null
    totalSalesVolume: Decimal | null
  }

  export type PlatformStatsMinAggregateOutputType = {
    id: string | null
    totalSongs: number | null
    totalUsers: number | null
    totalArtists: number | null
    totalPlays: number | null
    totalSales: number | null
    totalSalesVolume: Decimal | null
    updatedAt: Date | null
  }

  export type PlatformStatsMaxAggregateOutputType = {
    id: string | null
    totalSongs: number | null
    totalUsers: number | null
    totalArtists: number | null
    totalPlays: number | null
    totalSales: number | null
    totalSalesVolume: Decimal | null
    updatedAt: Date | null
  }

  export type PlatformStatsCountAggregateOutputType = {
    id: number
    totalSongs: number
    totalUsers: number
    totalArtists: number
    totalPlays: number
    totalSales: number
    totalSalesVolume: number
    updatedAt: number
    _all: number
  }


  export type PlatformStatsAvgAggregateInputType = {
    totalSongs?: true
    totalUsers?: true
    totalArtists?: true
    totalPlays?: true
    totalSales?: true
    totalSalesVolume?: true
  }

  export type PlatformStatsSumAggregateInputType = {
    totalSongs?: true
    totalUsers?: true
    totalArtists?: true
    totalPlays?: true
    totalSales?: true
    totalSalesVolume?: true
  }

  export type PlatformStatsMinAggregateInputType = {
    id?: true
    totalSongs?: true
    totalUsers?: true
    totalArtists?: true
    totalPlays?: true
    totalSales?: true
    totalSalesVolume?: true
    updatedAt?: true
  }

  export type PlatformStatsMaxAggregateInputType = {
    id?: true
    totalSongs?: true
    totalUsers?: true
    totalArtists?: true
    totalPlays?: true
    totalSales?: true
    totalSalesVolume?: true
    updatedAt?: true
  }

  export type PlatformStatsCountAggregateInputType = {
    id?: true
    totalSongs?: true
    totalUsers?: true
    totalArtists?: true
    totalPlays?: true
    totalSales?: true
    totalSalesVolume?: true
    updatedAt?: true
    _all?: true
  }

  export type PlatformStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformStats to aggregate.
     */
    where?: PlatformStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformStats to fetch.
     */
    orderBy?: PlatformStatsOrderByWithRelationInput | PlatformStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlatformStats
    **/
    _count?: true | PlatformStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformStatsMaxAggregateInputType
  }

  export type GetPlatformStatsAggregateType<T extends PlatformStatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatformStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformStats[P]>
      : GetScalarType<T[P], AggregatePlatformStats[P]>
  }




  export type PlatformStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformStatsWhereInput
    orderBy?: PlatformStatsOrderByWithAggregationInput | PlatformStatsOrderByWithAggregationInput[]
    by: PlatformStatsScalarFieldEnum[] | PlatformStatsScalarFieldEnum
    having?: PlatformStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformStatsCountAggregateInputType | true
    _avg?: PlatformStatsAvgAggregateInputType
    _sum?: PlatformStatsSumAggregateInputType
    _min?: PlatformStatsMinAggregateInputType
    _max?: PlatformStatsMaxAggregateInputType
  }

  export type PlatformStatsGroupByOutputType = {
    id: string
    totalSongs: number | null
    totalUsers: number | null
    totalArtists: number | null
    totalPlays: number | null
    totalSales: number | null
    totalSalesVolume: Decimal | null
    updatedAt: Date | null
    _count: PlatformStatsCountAggregateOutputType | null
    _avg: PlatformStatsAvgAggregateOutputType | null
    _sum: PlatformStatsSumAggregateOutputType | null
    _min: PlatformStatsMinAggregateOutputType | null
    _max: PlatformStatsMaxAggregateOutputType | null
  }

  type GetPlatformStatsGroupByPayload<T extends PlatformStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformStatsGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformStatsGroupByOutputType[P]>
        }
      >
    >


  export type PlatformStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalSongs?: boolean
    totalUsers?: boolean
    totalArtists?: boolean
    totalPlays?: boolean
    totalSales?: boolean
    totalSalesVolume?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platformStats"]>

  export type PlatformStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalSongs?: boolean
    totalUsers?: boolean
    totalArtists?: boolean
    totalPlays?: boolean
    totalSales?: boolean
    totalSalesVolume?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platformStats"]>

  export type PlatformStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalSongs?: boolean
    totalUsers?: boolean
    totalArtists?: boolean
    totalPlays?: boolean
    totalSales?: boolean
    totalSalesVolume?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platformStats"]>

  export type PlatformStatsSelectScalar = {
    id?: boolean
    totalSongs?: boolean
    totalUsers?: boolean
    totalArtists?: boolean
    totalPlays?: boolean
    totalSales?: boolean
    totalSalesVolume?: boolean
    updatedAt?: boolean
  }

  export type PlatformStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalSongs" | "totalUsers" | "totalArtists" | "totalPlays" | "totalSales" | "totalSalesVolume" | "updatedAt", ExtArgs["result"]["platformStats"]>

  export type $PlatformStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlatformStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalSongs: number | null
      totalUsers: number | null
      totalArtists: number | null
      totalPlays: number | null
      totalSales: number | null
      totalSalesVolume: Prisma.Decimal | null
      updatedAt: Date | null
    }, ExtArgs["result"]["platformStats"]>
    composites: {}
  }

  type PlatformStatsGetPayload<S extends boolean | null | undefined | PlatformStatsDefaultArgs> = $Result.GetResult<Prisma.$PlatformStatsPayload, S>

  type PlatformStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformStatsCountAggregateInputType | true
    }

  export interface PlatformStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlatformStats'], meta: { name: 'PlatformStats' } }
    /**
     * Find zero or one PlatformStats that matches the filter.
     * @param {PlatformStatsFindUniqueArgs} args - Arguments to find a PlatformStats
     * @example
     * // Get one PlatformStats
     * const platformStats = await prisma.platformStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformStatsFindUniqueArgs>(args: SelectSubset<T, PlatformStatsFindUniqueArgs<ExtArgs>>): Prisma__PlatformStatsClient<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlatformStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformStatsFindUniqueOrThrowArgs} args - Arguments to find a PlatformStats
     * @example
     * // Get one PlatformStats
     * const platformStats = await prisma.platformStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformStatsClient<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformStatsFindFirstArgs} args - Arguments to find a PlatformStats
     * @example
     * // Get one PlatformStats
     * const platformStats = await prisma.platformStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformStatsFindFirstArgs>(args?: SelectSubset<T, PlatformStatsFindFirstArgs<ExtArgs>>): Prisma__PlatformStatsClient<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformStatsFindFirstOrThrowArgs} args - Arguments to find a PlatformStats
     * @example
     * // Get one PlatformStats
     * const platformStats = await prisma.platformStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformStatsClient<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlatformStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformStats
     * const platformStats = await prisma.platformStats.findMany()
     * 
     * // Get first 10 PlatformStats
     * const platformStats = await prisma.platformStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformStatsWithIdOnly = await prisma.platformStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformStatsFindManyArgs>(args?: SelectSubset<T, PlatformStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlatformStats.
     * @param {PlatformStatsCreateArgs} args - Arguments to create a PlatformStats.
     * @example
     * // Create one PlatformStats
     * const PlatformStats = await prisma.platformStats.create({
     *   data: {
     *     // ... data to create a PlatformStats
     *   }
     * })
     * 
     */
    create<T extends PlatformStatsCreateArgs>(args: SelectSubset<T, PlatformStatsCreateArgs<ExtArgs>>): Prisma__PlatformStatsClient<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlatformStats.
     * @param {PlatformStatsCreateManyArgs} args - Arguments to create many PlatformStats.
     * @example
     * // Create many PlatformStats
     * const platformStats = await prisma.platformStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformStatsCreateManyArgs>(args?: SelectSubset<T, PlatformStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlatformStats and returns the data saved in the database.
     * @param {PlatformStatsCreateManyAndReturnArgs} args - Arguments to create many PlatformStats.
     * @example
     * // Create many PlatformStats
     * const platformStats = await prisma.platformStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlatformStats and only return the `id`
     * const platformStatsWithIdOnly = await prisma.platformStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlatformStats.
     * @param {PlatformStatsDeleteArgs} args - Arguments to delete one PlatformStats.
     * @example
     * // Delete one PlatformStats
     * const PlatformStats = await prisma.platformStats.delete({
     *   where: {
     *     // ... filter to delete one PlatformStats
     *   }
     * })
     * 
     */
    delete<T extends PlatformStatsDeleteArgs>(args: SelectSubset<T, PlatformStatsDeleteArgs<ExtArgs>>): Prisma__PlatformStatsClient<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlatformStats.
     * @param {PlatformStatsUpdateArgs} args - Arguments to update one PlatformStats.
     * @example
     * // Update one PlatformStats
     * const platformStats = await prisma.platformStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformStatsUpdateArgs>(args: SelectSubset<T, PlatformStatsUpdateArgs<ExtArgs>>): Prisma__PlatformStatsClient<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlatformStats.
     * @param {PlatformStatsDeleteManyArgs} args - Arguments to filter PlatformStats to delete.
     * @example
     * // Delete a few PlatformStats
     * const { count } = await prisma.platformStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformStatsDeleteManyArgs>(args?: SelectSubset<T, PlatformStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformStats
     * const platformStats = await prisma.platformStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformStatsUpdateManyArgs>(args: SelectSubset<T, PlatformStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformStats and returns the data updated in the database.
     * @param {PlatformStatsUpdateManyAndReturnArgs} args - Arguments to update many PlatformStats.
     * @example
     * // Update many PlatformStats
     * const platformStats = await prisma.platformStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlatformStats and only return the `id`
     * const platformStatsWithIdOnly = await prisma.platformStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlatformStats.
     * @param {PlatformStatsUpsertArgs} args - Arguments to update or create a PlatformStats.
     * @example
     * // Update or create a PlatformStats
     * const platformStats = await prisma.platformStats.upsert({
     *   create: {
     *     // ... data to create a PlatformStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformStats we want to update
     *   }
     * })
     */
    upsert<T extends PlatformStatsUpsertArgs>(args: SelectSubset<T, PlatformStatsUpsertArgs<ExtArgs>>): Prisma__PlatformStatsClient<$Result.GetResult<Prisma.$PlatformStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlatformStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformStatsCountArgs} args - Arguments to filter PlatformStats to count.
     * @example
     * // Count the number of PlatformStats
     * const count = await prisma.platformStats.count({
     *   where: {
     *     // ... the filter for the PlatformStats we want to count
     *   }
     * })
    **/
    count<T extends PlatformStatsCountArgs>(
      args?: Subset<T, PlatformStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlatformStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformStatsAggregateArgs>(args: Subset<T, PlatformStatsAggregateArgs>): Prisma.PrismaPromise<GetPlatformStatsAggregateType<T>>

    /**
     * Group by PlatformStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformStatsGroupByArgs['orderBy'] }
        : { orderBy?: PlatformStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlatformStats model
   */
  readonly fields: PlatformStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlatformStats model
   */
  interface PlatformStatsFieldRefs {
    readonly id: FieldRef<"PlatformStats", 'String'>
    readonly totalSongs: FieldRef<"PlatformStats", 'Int'>
    readonly totalUsers: FieldRef<"PlatformStats", 'Int'>
    readonly totalArtists: FieldRef<"PlatformStats", 'Int'>
    readonly totalPlays: FieldRef<"PlatformStats", 'Int'>
    readonly totalSales: FieldRef<"PlatformStats", 'Int'>
    readonly totalSalesVolume: FieldRef<"PlatformStats", 'Decimal'>
    readonly updatedAt: FieldRef<"PlatformStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlatformStats findUnique
   */
  export type PlatformStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformStats to fetch.
     */
    where: PlatformStatsWhereUniqueInput
  }

  /**
   * PlatformStats findUniqueOrThrow
   */
  export type PlatformStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformStats to fetch.
     */
    where: PlatformStatsWhereUniqueInput
  }

  /**
   * PlatformStats findFirst
   */
  export type PlatformStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformStats to fetch.
     */
    where?: PlatformStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformStats to fetch.
     */
    orderBy?: PlatformStatsOrderByWithRelationInput | PlatformStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformStats.
     */
    cursor?: PlatformStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformStats.
     */
    distinct?: PlatformStatsScalarFieldEnum | PlatformStatsScalarFieldEnum[]
  }

  /**
   * PlatformStats findFirstOrThrow
   */
  export type PlatformStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformStats to fetch.
     */
    where?: PlatformStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformStats to fetch.
     */
    orderBy?: PlatformStatsOrderByWithRelationInput | PlatformStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformStats.
     */
    cursor?: PlatformStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformStats.
     */
    distinct?: PlatformStatsScalarFieldEnum | PlatformStatsScalarFieldEnum[]
  }

  /**
   * PlatformStats findMany
   */
  export type PlatformStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformStats to fetch.
     */
    where?: PlatformStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformStats to fetch.
     */
    orderBy?: PlatformStatsOrderByWithRelationInput | PlatformStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlatformStats.
     */
    cursor?: PlatformStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformStats.
     */
    skip?: number
    distinct?: PlatformStatsScalarFieldEnum | PlatformStatsScalarFieldEnum[]
  }

  /**
   * PlatformStats create
   */
  export type PlatformStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a PlatformStats.
     */
    data?: XOR<PlatformStatsCreateInput, PlatformStatsUncheckedCreateInput>
  }

  /**
   * PlatformStats createMany
   */
  export type PlatformStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlatformStats.
     */
    data: PlatformStatsCreateManyInput | PlatformStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformStats createManyAndReturn
   */
  export type PlatformStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * The data used to create many PlatformStats.
     */
    data: PlatformStatsCreateManyInput | PlatformStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformStats update
   */
  export type PlatformStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a PlatformStats.
     */
    data: XOR<PlatformStatsUpdateInput, PlatformStatsUncheckedUpdateInput>
    /**
     * Choose, which PlatformStats to update.
     */
    where: PlatformStatsWhereUniqueInput
  }

  /**
   * PlatformStats updateMany
   */
  export type PlatformStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlatformStats.
     */
    data: XOR<PlatformStatsUpdateManyMutationInput, PlatformStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlatformStats to update
     */
    where?: PlatformStatsWhereInput
    /**
     * Limit how many PlatformStats to update.
     */
    limit?: number
  }

  /**
   * PlatformStats updateManyAndReturn
   */
  export type PlatformStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * The data used to update PlatformStats.
     */
    data: XOR<PlatformStatsUpdateManyMutationInput, PlatformStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlatformStats to update
     */
    where?: PlatformStatsWhereInput
    /**
     * Limit how many PlatformStats to update.
     */
    limit?: number
  }

  /**
   * PlatformStats upsert
   */
  export type PlatformStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the PlatformStats to update in case it exists.
     */
    where: PlatformStatsWhereUniqueInput
    /**
     * In case the PlatformStats found by the `where` argument doesn't exist, create a new PlatformStats with this data.
     */
    create: XOR<PlatformStatsCreateInput, PlatformStatsUncheckedCreateInput>
    /**
     * In case the PlatformStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformStatsUpdateInput, PlatformStatsUncheckedUpdateInput>
  }

  /**
   * PlatformStats delete
   */
  export type PlatformStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
    /**
     * Filter which PlatformStats to delete.
     */
    where: PlatformStatsWhereUniqueInput
  }

  /**
   * PlatformStats deleteMany
   */
  export type PlatformStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformStats to delete
     */
    where?: PlatformStatsWhereInput
    /**
     * Limit how many PlatformStats to delete.
     */
    limit?: number
  }

  /**
   * PlatformStats without action
   */
  export type PlatformStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformStats
     */
    select?: PlatformStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformStats
     */
    omit?: PlatformStatsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    username: 'username',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isArtist: 'isArtist'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ipfsHash: 'ipfsHash',
    previewIpfsHash: 'previewIpfsHash',
    price: 'price',
    ownerId: 'ownerId',
    forSale: 'forSale',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const UserSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planType: 'planType',
    isActive: 'isActive',
    startDate: 'startDate',
    endDate: 'endDate',
    amount: 'amount'
  };

  export type UserSubscriptionScalarFieldEnum = (typeof UserSubscriptionScalarFieldEnum)[keyof typeof UserSubscriptionScalarFieldEnum]


  export const ArtistMetadataScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    profileImage: 'profileImage',
    bio: 'bio',
    socialLinks: 'socialLinks',
    totalSongs: 'totalSongs',
    totalSales: 'totalSales'
  };

  export type ArtistMetadataScalarFieldEnum = (typeof ArtistMetadataScalarFieldEnum)[keyof typeof ArtistMetadataScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    songCount: 'songCount'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const PlaylistSongScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    songId: 'songId',
    position: 'position'
  };

  export type PlaylistSongScalarFieldEnum = (typeof PlaylistSongScalarFieldEnum)[keyof typeof PlaylistSongScalarFieldEnum]


  export const FavoriteSongScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    songId: 'songId',
    addedAt: 'addedAt'
  };

  export type FavoriteSongScalarFieldEnum = (typeof FavoriteSongScalarFieldEnum)[keyof typeof FavoriteSongScalarFieldEnum]


  export const LikedSongScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    songId: 'songId',
    likedAt: 'likedAt'
  };

  export type LikedSongScalarFieldEnum = (typeof LikedSongScalarFieldEnum)[keyof typeof LikedSongScalarFieldEnum]


  export const SongStatsScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    playCount: 'playCount',
    favoriteCount: 'favoriteCount',
    likeCount: 'likeCount',
    lastPlayed: 'lastPlayed'
  };

  export type SongStatsScalarFieldEnum = (typeof SongStatsScalarFieldEnum)[keyof typeof SongStatsScalarFieldEnum]


  export const PlatformStatsScalarFieldEnum: {
    id: 'id',
    totalSongs: 'totalSongs',
    totalUsers: 'totalUsers',
    totalArtists: 'totalArtists',
    totalPlays: 'totalPlays',
    totalSales: 'totalSales',
    totalSalesVolume: 'totalSalesVolume',
    updatedAt: 'updatedAt'
  };

  export type PlatformStatsScalarFieldEnum = (typeof PlatformStatsScalarFieldEnum)[keyof typeof PlatformStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    walletAddress?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isArtist?: BoolNullableFilter<"User"> | boolean | null
    songs?: SongListRelationFilter
    subscriptions?: UserSubscriptionListRelationFilter
    artistMetadata?: XOR<ArtistMetadataNullableScalarRelationFilter, ArtistMetadataWhereInput> | null
    playlists?: PlaylistListRelationFilter
    favoriteSongs?: FavoriteSongListRelationFilter
    likedSongs?: LikedSongListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isArtist?: SortOrderInput | SortOrder
    songs?: SongOrderByRelationAggregateInput
    subscriptions?: UserSubscriptionOrderByRelationAggregateInput
    artistMetadata?: ArtistMetadataOrderByWithRelationInput
    playlists?: PlaylistOrderByRelationAggregateInput
    favoriteSongs?: FavoriteSongOrderByRelationAggregateInput
    likedSongs?: LikedSongOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isArtist?: BoolNullableFilter<"User"> | boolean | null
    songs?: SongListRelationFilter
    subscriptions?: UserSubscriptionListRelationFilter
    artistMetadata?: XOR<ArtistMetadataNullableScalarRelationFilter, ArtistMetadataWhereInput> | null
    playlists?: PlaylistListRelationFilter
    favoriteSongs?: FavoriteSongListRelationFilter
    likedSongs?: LikedSongListRelationFilter
  }, "id" | "walletAddress" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isArtist?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    walletAddress?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isArtist?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: UuidFilter<"Song"> | string
    name?: StringFilter<"Song"> | string
    ipfsHash?: StringFilter<"Song"> | string
    previewIpfsHash?: StringFilter<"Song"> | string
    price?: DecimalFilter<"Song"> | Decimal | DecimalJsLike | number | string
    ownerId?: UuidNullableFilter<"Song"> | string | null
    forSale?: BoolNullableFilter<"Song"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Song"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Song"> | Date | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    playlistSongs?: PlaylistSongListRelationFilter
    favoriteSongs?: FavoriteSongListRelationFilter
    likedSongs?: LikedSongListRelationFilter
    stats?: XOR<SongStatsNullableScalarRelationFilter, SongStatsWhereInput> | null
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ipfsHash?: SortOrder
    previewIpfsHash?: SortOrder
    price?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    forSale?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    playlistSongs?: PlaylistSongOrderByRelationAggregateInput
    favoriteSongs?: FavoriteSongOrderByRelationAggregateInput
    likedSongs?: LikedSongOrderByRelationAggregateInput
    stats?: SongStatsOrderByWithRelationInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    name?: StringFilter<"Song"> | string
    ipfsHash?: StringFilter<"Song"> | string
    previewIpfsHash?: StringFilter<"Song"> | string
    price?: DecimalFilter<"Song"> | Decimal | DecimalJsLike | number | string
    ownerId?: UuidNullableFilter<"Song"> | string | null
    forSale?: BoolNullableFilter<"Song"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Song"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Song"> | Date | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    playlistSongs?: PlaylistSongListRelationFilter
    favoriteSongs?: FavoriteSongListRelationFilter
    likedSongs?: LikedSongListRelationFilter
    stats?: XOR<SongStatsNullableScalarRelationFilter, SongStatsWhereInput> | null
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ipfsHash?: SortOrder
    previewIpfsHash?: SortOrder
    price?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    forSale?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Song"> | string
    name?: StringWithAggregatesFilter<"Song"> | string
    ipfsHash?: StringWithAggregatesFilter<"Song"> | string
    previewIpfsHash?: StringWithAggregatesFilter<"Song"> | string
    price?: DecimalWithAggregatesFilter<"Song"> | Decimal | DecimalJsLike | number | string
    ownerId?: UuidNullableWithAggregatesFilter<"Song"> | string | null
    forSale?: BoolNullableWithAggregatesFilter<"Song"> | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Song"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Song"> | Date | string | null
  }

  export type UserSubscriptionWhereInput = {
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    id?: UuidFilter<"UserSubscription"> | string
    userId?: UuidFilter<"UserSubscription"> | string
    planType?: StringFilter<"UserSubscription"> | string
    isActive?: BoolNullableFilter<"UserSubscription"> | boolean | null
    startDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    endDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    amount?: DecimalNullableFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    isActive?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    userId?: UuidFilter<"UserSubscription"> | string
    planType?: StringFilter<"UserSubscription"> | string
    isActive?: BoolNullableFilter<"UserSubscription"> | boolean | null
    startDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    endDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    amount?: DecimalNullableFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    isActive?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    _count?: UserSubscriptionCountOrderByAggregateInput
    _avg?: UserSubscriptionAvgOrderByAggregateInput
    _max?: UserSubscriptionMaxOrderByAggregateInput
    _min?: UserSubscriptionMinOrderByAggregateInput
    _sum?: UserSubscriptionSumOrderByAggregateInput
  }

  export type UserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: UserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserSubscription"> | string
    userId?: UuidWithAggregatesFilter<"UserSubscription"> | string
    planType?: StringWithAggregatesFilter<"UserSubscription"> | string
    isActive?: BoolNullableWithAggregatesFilter<"UserSubscription"> | boolean | null
    startDate?: DateTimeNullableWithAggregatesFilter<"UserSubscription"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"UserSubscription"> | Date | string | null
    amount?: DecimalNullableWithAggregatesFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ArtistMetadataWhereInput = {
    AND?: ArtistMetadataWhereInput | ArtistMetadataWhereInput[]
    OR?: ArtistMetadataWhereInput[]
    NOT?: ArtistMetadataWhereInput | ArtistMetadataWhereInput[]
    id?: UuidFilter<"ArtistMetadata"> | string
    userId?: UuidFilter<"ArtistMetadata"> | string
    profileImage?: StringNullableFilter<"ArtistMetadata"> | string | null
    bio?: StringNullableFilter<"ArtistMetadata"> | string | null
    socialLinks?: JsonNullableFilter<"ArtistMetadata">
    totalSongs?: IntNullableFilter<"ArtistMetadata"> | number | null
    totalSales?: IntNullableFilter<"ArtistMetadata"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ArtistMetadataOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    totalSongs?: SortOrderInput | SortOrder
    totalSales?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ArtistMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ArtistMetadataWhereInput | ArtistMetadataWhereInput[]
    OR?: ArtistMetadataWhereInput[]
    NOT?: ArtistMetadataWhereInput | ArtistMetadataWhereInput[]
    profileImage?: StringNullableFilter<"ArtistMetadata"> | string | null
    bio?: StringNullableFilter<"ArtistMetadata"> | string | null
    socialLinks?: JsonNullableFilter<"ArtistMetadata">
    totalSongs?: IntNullableFilter<"ArtistMetadata"> | number | null
    totalSales?: IntNullableFilter<"ArtistMetadata"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ArtistMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    totalSongs?: SortOrderInput | SortOrder
    totalSales?: SortOrderInput | SortOrder
    _count?: ArtistMetadataCountOrderByAggregateInput
    _avg?: ArtistMetadataAvgOrderByAggregateInput
    _max?: ArtistMetadataMaxOrderByAggregateInput
    _min?: ArtistMetadataMinOrderByAggregateInput
    _sum?: ArtistMetadataSumOrderByAggregateInput
  }

  export type ArtistMetadataScalarWhereWithAggregatesInput = {
    AND?: ArtistMetadataScalarWhereWithAggregatesInput | ArtistMetadataScalarWhereWithAggregatesInput[]
    OR?: ArtistMetadataScalarWhereWithAggregatesInput[]
    NOT?: ArtistMetadataScalarWhereWithAggregatesInput | ArtistMetadataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ArtistMetadata"> | string
    userId?: UuidWithAggregatesFilter<"ArtistMetadata"> | string
    profileImage?: StringNullableWithAggregatesFilter<"ArtistMetadata"> | string | null
    bio?: StringNullableWithAggregatesFilter<"ArtistMetadata"> | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"ArtistMetadata">
    totalSongs?: IntNullableWithAggregatesFilter<"ArtistMetadata"> | number | null
    totalSales?: IntNullableWithAggregatesFilter<"ArtistMetadata"> | number | null
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: UuidFilter<"Playlist"> | string
    userId?: UuidFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    createdAt?: DateTimeNullableFilter<"Playlist"> | Date | string | null
    songCount?: IntNullableFilter<"Playlist"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    songs?: PlaylistSongListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    songCount?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    songs?: PlaylistSongOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    userId?: UuidFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    createdAt?: DateTimeNullableFilter<"Playlist"> | Date | string | null
    songCount?: IntNullableFilter<"Playlist"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    songs?: PlaylistSongListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    songCount?: SortOrderInput | SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Playlist"> | string
    userId?: UuidWithAggregatesFilter<"Playlist"> | string
    name?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Playlist"> | Date | string | null
    songCount?: IntNullableWithAggregatesFilter<"Playlist"> | number | null
  }

  export type PlaylistSongWhereInput = {
    AND?: PlaylistSongWhereInput | PlaylistSongWhereInput[]
    OR?: PlaylistSongWhereInput[]
    NOT?: PlaylistSongWhereInput | PlaylistSongWhereInput[]
    id?: UuidFilter<"PlaylistSong"> | string
    playlistId?: UuidFilter<"PlaylistSong"> | string
    songId?: UuidFilter<"PlaylistSong"> | string
    position?: IntNullableFilter<"PlaylistSong"> | number | null
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type PlaylistSongOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    position?: SortOrderInput | SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
  }

  export type PlaylistSongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistSongWhereInput | PlaylistSongWhereInput[]
    OR?: PlaylistSongWhereInput[]
    NOT?: PlaylistSongWhereInput | PlaylistSongWhereInput[]
    playlistId?: UuidFilter<"PlaylistSong"> | string
    songId?: UuidFilter<"PlaylistSong"> | string
    position?: IntNullableFilter<"PlaylistSong"> | number | null
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id">

  export type PlaylistSongOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    position?: SortOrderInput | SortOrder
    _count?: PlaylistSongCountOrderByAggregateInput
    _avg?: PlaylistSongAvgOrderByAggregateInput
    _max?: PlaylistSongMaxOrderByAggregateInput
    _min?: PlaylistSongMinOrderByAggregateInput
    _sum?: PlaylistSongSumOrderByAggregateInput
  }

  export type PlaylistSongScalarWhereWithAggregatesInput = {
    AND?: PlaylistSongScalarWhereWithAggregatesInput | PlaylistSongScalarWhereWithAggregatesInput[]
    OR?: PlaylistSongScalarWhereWithAggregatesInput[]
    NOT?: PlaylistSongScalarWhereWithAggregatesInput | PlaylistSongScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PlaylistSong"> | string
    playlistId?: UuidWithAggregatesFilter<"PlaylistSong"> | string
    songId?: UuidWithAggregatesFilter<"PlaylistSong"> | string
    position?: IntNullableWithAggregatesFilter<"PlaylistSong"> | number | null
  }

  export type FavoriteSongWhereInput = {
    AND?: FavoriteSongWhereInput | FavoriteSongWhereInput[]
    OR?: FavoriteSongWhereInput[]
    NOT?: FavoriteSongWhereInput | FavoriteSongWhereInput[]
    id?: UuidFilter<"FavoriteSong"> | string
    userId?: UuidFilter<"FavoriteSong"> | string
    songId?: UuidFilter<"FavoriteSong"> | string
    addedAt?: DateTimeNullableFilter<"FavoriteSong"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type FavoriteSongOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    addedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
  }

  export type FavoriteSongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavoriteSongWhereInput | FavoriteSongWhereInput[]
    OR?: FavoriteSongWhereInput[]
    NOT?: FavoriteSongWhereInput | FavoriteSongWhereInput[]
    userId?: UuidFilter<"FavoriteSong"> | string
    songId?: UuidFilter<"FavoriteSong"> | string
    addedAt?: DateTimeNullableFilter<"FavoriteSong"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id">

  export type FavoriteSongOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    addedAt?: SortOrderInput | SortOrder
    _count?: FavoriteSongCountOrderByAggregateInput
    _max?: FavoriteSongMaxOrderByAggregateInput
    _min?: FavoriteSongMinOrderByAggregateInput
  }

  export type FavoriteSongScalarWhereWithAggregatesInput = {
    AND?: FavoriteSongScalarWhereWithAggregatesInput | FavoriteSongScalarWhereWithAggregatesInput[]
    OR?: FavoriteSongScalarWhereWithAggregatesInput[]
    NOT?: FavoriteSongScalarWhereWithAggregatesInput | FavoriteSongScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FavoriteSong"> | string
    userId?: UuidWithAggregatesFilter<"FavoriteSong"> | string
    songId?: UuidWithAggregatesFilter<"FavoriteSong"> | string
    addedAt?: DateTimeNullableWithAggregatesFilter<"FavoriteSong"> | Date | string | null
  }

  export type LikedSongWhereInput = {
    AND?: LikedSongWhereInput | LikedSongWhereInput[]
    OR?: LikedSongWhereInput[]
    NOT?: LikedSongWhereInput | LikedSongWhereInput[]
    id?: UuidFilter<"LikedSong"> | string
    userId?: UuidFilter<"LikedSong"> | string
    songId?: UuidFilter<"LikedSong"> | string
    likedAt?: DateTimeNullableFilter<"LikedSong"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type LikedSongOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    likedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
  }

  export type LikedSongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikedSongWhereInput | LikedSongWhereInput[]
    OR?: LikedSongWhereInput[]
    NOT?: LikedSongWhereInput | LikedSongWhereInput[]
    userId?: UuidFilter<"LikedSong"> | string
    songId?: UuidFilter<"LikedSong"> | string
    likedAt?: DateTimeNullableFilter<"LikedSong"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id">

  export type LikedSongOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    likedAt?: SortOrderInput | SortOrder
    _count?: LikedSongCountOrderByAggregateInput
    _max?: LikedSongMaxOrderByAggregateInput
    _min?: LikedSongMinOrderByAggregateInput
  }

  export type LikedSongScalarWhereWithAggregatesInput = {
    AND?: LikedSongScalarWhereWithAggregatesInput | LikedSongScalarWhereWithAggregatesInput[]
    OR?: LikedSongScalarWhereWithAggregatesInput[]
    NOT?: LikedSongScalarWhereWithAggregatesInput | LikedSongScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LikedSong"> | string
    userId?: UuidWithAggregatesFilter<"LikedSong"> | string
    songId?: UuidWithAggregatesFilter<"LikedSong"> | string
    likedAt?: DateTimeNullableWithAggregatesFilter<"LikedSong"> | Date | string | null
  }

  export type SongStatsWhereInput = {
    AND?: SongStatsWhereInput | SongStatsWhereInput[]
    OR?: SongStatsWhereInput[]
    NOT?: SongStatsWhereInput | SongStatsWhereInput[]
    id?: UuidFilter<"SongStats"> | string
    songId?: UuidFilter<"SongStats"> | string
    playCount?: IntNullableFilter<"SongStats"> | number | null
    favoriteCount?: IntNullableFilter<"SongStats"> | number | null
    likeCount?: IntNullableFilter<"SongStats"> | number | null
    lastPlayed?: DateTimeNullableFilter<"SongStats"> | Date | string | null
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type SongStatsOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    playCount?: SortOrderInput | SortOrder
    favoriteCount?: SortOrderInput | SortOrder
    likeCount?: SortOrderInput | SortOrder
    lastPlayed?: SortOrderInput | SortOrder
    song?: SongOrderByWithRelationInput
  }

  export type SongStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    songId?: string
    AND?: SongStatsWhereInput | SongStatsWhereInput[]
    OR?: SongStatsWhereInput[]
    NOT?: SongStatsWhereInput | SongStatsWhereInput[]
    playCount?: IntNullableFilter<"SongStats"> | number | null
    favoriteCount?: IntNullableFilter<"SongStats"> | number | null
    likeCount?: IntNullableFilter<"SongStats"> | number | null
    lastPlayed?: DateTimeNullableFilter<"SongStats"> | Date | string | null
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id" | "songId">

  export type SongStatsOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    playCount?: SortOrderInput | SortOrder
    favoriteCount?: SortOrderInput | SortOrder
    likeCount?: SortOrderInput | SortOrder
    lastPlayed?: SortOrderInput | SortOrder
    _count?: SongStatsCountOrderByAggregateInput
    _avg?: SongStatsAvgOrderByAggregateInput
    _max?: SongStatsMaxOrderByAggregateInput
    _min?: SongStatsMinOrderByAggregateInput
    _sum?: SongStatsSumOrderByAggregateInput
  }

  export type SongStatsScalarWhereWithAggregatesInput = {
    AND?: SongStatsScalarWhereWithAggregatesInput | SongStatsScalarWhereWithAggregatesInput[]
    OR?: SongStatsScalarWhereWithAggregatesInput[]
    NOT?: SongStatsScalarWhereWithAggregatesInput | SongStatsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SongStats"> | string
    songId?: UuidWithAggregatesFilter<"SongStats"> | string
    playCount?: IntNullableWithAggregatesFilter<"SongStats"> | number | null
    favoriteCount?: IntNullableWithAggregatesFilter<"SongStats"> | number | null
    likeCount?: IntNullableWithAggregatesFilter<"SongStats"> | number | null
    lastPlayed?: DateTimeNullableWithAggregatesFilter<"SongStats"> | Date | string | null
  }

  export type PlatformStatsWhereInput = {
    AND?: PlatformStatsWhereInput | PlatformStatsWhereInput[]
    OR?: PlatformStatsWhereInput[]
    NOT?: PlatformStatsWhereInput | PlatformStatsWhereInput[]
    id?: UuidFilter<"PlatformStats"> | string
    totalSongs?: IntNullableFilter<"PlatformStats"> | number | null
    totalUsers?: IntNullableFilter<"PlatformStats"> | number | null
    totalArtists?: IntNullableFilter<"PlatformStats"> | number | null
    totalPlays?: IntNullableFilter<"PlatformStats"> | number | null
    totalSales?: IntNullableFilter<"PlatformStats"> | number | null
    totalSalesVolume?: DecimalNullableFilter<"PlatformStats"> | Decimal | DecimalJsLike | number | string | null
    updatedAt?: DateTimeNullableFilter<"PlatformStats"> | Date | string | null
  }

  export type PlatformStatsOrderByWithRelationInput = {
    id?: SortOrder
    totalSongs?: SortOrderInput | SortOrder
    totalUsers?: SortOrderInput | SortOrder
    totalArtists?: SortOrderInput | SortOrder
    totalPlays?: SortOrderInput | SortOrder
    totalSales?: SortOrderInput | SortOrder
    totalSalesVolume?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type PlatformStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlatformStatsWhereInput | PlatformStatsWhereInput[]
    OR?: PlatformStatsWhereInput[]
    NOT?: PlatformStatsWhereInput | PlatformStatsWhereInput[]
    totalSongs?: IntNullableFilter<"PlatformStats"> | number | null
    totalUsers?: IntNullableFilter<"PlatformStats"> | number | null
    totalArtists?: IntNullableFilter<"PlatformStats"> | number | null
    totalPlays?: IntNullableFilter<"PlatformStats"> | number | null
    totalSales?: IntNullableFilter<"PlatformStats"> | number | null
    totalSalesVolume?: DecimalNullableFilter<"PlatformStats"> | Decimal | DecimalJsLike | number | string | null
    updatedAt?: DateTimeNullableFilter<"PlatformStats"> | Date | string | null
  }, "id">

  export type PlatformStatsOrderByWithAggregationInput = {
    id?: SortOrder
    totalSongs?: SortOrderInput | SortOrder
    totalUsers?: SortOrderInput | SortOrder
    totalArtists?: SortOrderInput | SortOrder
    totalPlays?: SortOrderInput | SortOrder
    totalSales?: SortOrderInput | SortOrder
    totalSalesVolume?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PlatformStatsCountOrderByAggregateInput
    _avg?: PlatformStatsAvgOrderByAggregateInput
    _max?: PlatformStatsMaxOrderByAggregateInput
    _min?: PlatformStatsMinOrderByAggregateInput
    _sum?: PlatformStatsSumOrderByAggregateInput
  }

  export type PlatformStatsScalarWhereWithAggregatesInput = {
    AND?: PlatformStatsScalarWhereWithAggregatesInput | PlatformStatsScalarWhereWithAggregatesInput[]
    OR?: PlatformStatsScalarWhereWithAggregatesInput[]
    NOT?: PlatformStatsScalarWhereWithAggregatesInput | PlatformStatsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PlatformStats"> | string
    totalSongs?: IntNullableWithAggregatesFilter<"PlatformStats"> | number | null
    totalUsers?: IntNullableWithAggregatesFilter<"PlatformStats"> | number | null
    totalArtists?: IntNullableWithAggregatesFilter<"PlatformStats"> | number | null
    totalPlays?: IntNullableWithAggregatesFilter<"PlatformStats"> | number | null
    totalSales?: IntNullableWithAggregatesFilter<"PlatformStats"> | number | null
    totalSalesVolume?: DecimalNullableWithAggregatesFilter<"PlatformStats"> | Decimal | DecimalJsLike | number | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PlatformStats"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataCreateNestedOneWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongUncheckedCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataUncheckedCreateNestedOneWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUncheckedUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUncheckedUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SongCreateInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    owner?: UserCreateNestedOneWithoutSongsInput
    playlistSongs?: PlaylistSongCreateNestedManyWithoutSongInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongCreateNestedManyWithoutSongInput
    stats?: SongStatsCreateNestedOneWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    ownerId?: string | null
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    playlistSongs?: PlaylistSongUncheckedCreateNestedManyWithoutSongInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutSongInput
    stats?: SongStatsUncheckedCreateNestedOneWithoutSongInput
  }

  export type SongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutSongsNestedInput
    playlistSongs?: PlaylistSongUpdateManyWithoutSongNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUpdateManyWithoutSongNestedInput
    stats?: SongStatsUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlistSongs?: PlaylistSongUncheckedUpdateManyWithoutSongNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
    stats?: SongStatsUncheckedUpdateOneWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    ownerId?: string | null
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type SongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSubscriptionCreateInput = {
    id?: string
    planType: string
    isActive?: boolean | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    planType: string
    isActive?: boolean | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    amount?: Decimal | DecimalJsLike | number | string | null
  }

  export type UserSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UserSubscriptionCreateManyInput = {
    id?: string
    userId: string
    planType: string
    isActive?: boolean | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    amount?: Decimal | DecimalJsLike | number | string | null
  }

  export type UserSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UserSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ArtistMetadataCreateInput = {
    id?: string
    profileImage?: string | null
    bio?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: number | null
    totalSales?: number | null
    user: UserCreateNestedOneWithoutArtistMetadataInput
  }

  export type ArtistMetadataUncheckedCreateInput = {
    id?: string
    userId: string
    profileImage?: string | null
    bio?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: number | null
    totalSales?: number | null
  }

  export type ArtistMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutArtistMetadataNestedInput
  }

  export type ArtistMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArtistMetadataCreateManyInput = {
    id?: string
    userId: string
    profileImage?: string | null
    bio?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: number | null
    totalSales?: number | null
  }

  export type ArtistMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArtistMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaylistCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    songCount?: number | null
    user: UserCreateNestedOneWithoutPlaylistsInput
    songs?: PlaylistSongCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    songCount?: number | null
    songs?: PlaylistSongUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songCount?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    songs?: PlaylistSongUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songCount?: NullableIntFieldUpdateOperationsInput | number | null
    songs?: PlaylistSongUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    songCount?: number | null
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaylistSongCreateInput = {
    id?: string
    position?: number | null
    playlist: PlaylistCreateNestedOneWithoutSongsInput
    song: SongCreateNestedOneWithoutPlaylistSongsInput
  }

  export type PlaylistSongUncheckedCreateInput = {
    id?: string
    playlistId: string
    songId: string
    position?: number | null
  }

  export type PlaylistSongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    playlist?: PlaylistUpdateOneRequiredWithoutSongsNestedInput
    song?: SongUpdateOneRequiredWithoutPlaylistSongsNestedInput
  }

  export type PlaylistSongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaylistSongCreateManyInput = {
    id?: string
    playlistId: string
    songId: string
    position?: number | null
  }

  export type PlaylistSongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaylistSongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoriteSongCreateInput = {
    id?: string
    addedAt?: Date | string | null
    user: UserCreateNestedOneWithoutFavoriteSongsInput
    song: SongCreateNestedOneWithoutFavoriteSongsInput
  }

  export type FavoriteSongUncheckedCreateInput = {
    id?: string
    userId: string
    songId: string
    addedAt?: Date | string | null
  }

  export type FavoriteSongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutFavoriteSongsNestedInput
    song?: SongUpdateOneRequiredWithoutFavoriteSongsNestedInput
  }

  export type FavoriteSongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoriteSongCreateManyInput = {
    id?: string
    userId: string
    songId: string
    addedAt?: Date | string | null
  }

  export type FavoriteSongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoriteSongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikedSongCreateInput = {
    id?: string
    likedAt?: Date | string | null
    user: UserCreateNestedOneWithoutLikedSongsInput
    song: SongCreateNestedOneWithoutLikedSongsInput
  }

  export type LikedSongUncheckedCreateInput = {
    id?: string
    userId: string
    songId: string
    likedAt?: Date | string | null
  }

  export type LikedSongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutLikedSongsNestedInput
    song?: SongUpdateOneRequiredWithoutLikedSongsNestedInput
  }

  export type LikedSongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikedSongCreateManyInput = {
    id?: string
    userId: string
    songId: string
    likedAt?: Date | string | null
  }

  export type LikedSongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikedSongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SongStatsCreateInput = {
    id?: string
    playCount?: number | null
    favoriteCount?: number | null
    likeCount?: number | null
    lastPlayed?: Date | string | null
    song: SongCreateNestedOneWithoutStatsInput
  }

  export type SongStatsUncheckedCreateInput = {
    id?: string
    songId: string
    playCount?: number | null
    favoriteCount?: number | null
    likeCount?: number | null
    lastPlayed?: Date | string | null
  }

  export type SongStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playCount?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteCount?: NullableIntFieldUpdateOperationsInput | number | null
    likeCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastPlayed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    song?: SongUpdateOneRequiredWithoutStatsNestedInput
  }

  export type SongStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    playCount?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteCount?: NullableIntFieldUpdateOperationsInput | number | null
    likeCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastPlayed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SongStatsCreateManyInput = {
    id?: string
    songId: string
    playCount?: number | null
    favoriteCount?: number | null
    likeCount?: number | null
    lastPlayed?: Date | string | null
  }

  export type SongStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playCount?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteCount?: NullableIntFieldUpdateOperationsInput | number | null
    likeCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastPlayed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SongStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    playCount?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteCount?: NullableIntFieldUpdateOperationsInput | number | null
    likeCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastPlayed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlatformStatsCreateInput = {
    id?: string
    totalSongs?: number | null
    totalUsers?: number | null
    totalArtists?: number | null
    totalPlays?: number | null
    totalSales?: number | null
    totalSalesVolume?: Decimal | DecimalJsLike | number | string | null
    updatedAt?: Date | string | null
  }

  export type PlatformStatsUncheckedCreateInput = {
    id?: string
    totalSongs?: number | null
    totalUsers?: number | null
    totalArtists?: number | null
    totalPlays?: number | null
    totalSales?: number | null
    totalSalesVolume?: Decimal | DecimalJsLike | number | string | null
    updatedAt?: Date | string | null
  }

  export type PlatformStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalUsers?: NullableIntFieldUpdateOperationsInput | number | null
    totalArtists?: NullableIntFieldUpdateOperationsInput | number | null
    totalPlays?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
    totalSalesVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlatformStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalUsers?: NullableIntFieldUpdateOperationsInput | number | null
    totalArtists?: NullableIntFieldUpdateOperationsInput | number | null
    totalPlays?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
    totalSalesVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlatformStatsCreateManyInput = {
    id?: string
    totalSongs?: number | null
    totalUsers?: number | null
    totalArtists?: number | null
    totalPlays?: number | null
    totalSales?: number | null
    totalSalesVolume?: Decimal | DecimalJsLike | number | string | null
    updatedAt?: Date | string | null
  }

  export type PlatformStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalUsers?: NullableIntFieldUpdateOperationsInput | number | null
    totalArtists?: NullableIntFieldUpdateOperationsInput | number | null
    totalPlays?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
    totalSalesVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlatformStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalUsers?: NullableIntFieldUpdateOperationsInput | number | null
    totalArtists?: NullableIntFieldUpdateOperationsInput | number | null
    totalPlays?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
    totalSalesVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SongListRelationFilter = {
    every?: SongWhereInput
    some?: SongWhereInput
    none?: SongWhereInput
  }

  export type UserSubscriptionListRelationFilter = {
    every?: UserSubscriptionWhereInput
    some?: UserSubscriptionWhereInput
    none?: UserSubscriptionWhereInput
  }

  export type ArtistMetadataNullableScalarRelationFilter = {
    is?: ArtistMetadataWhereInput | null
    isNot?: ArtistMetadataWhereInput | null
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type FavoriteSongListRelationFilter = {
    every?: FavoriteSongWhereInput
    some?: FavoriteSongWhereInput
    none?: FavoriteSongWhereInput
  }

  export type LikedSongListRelationFilter = {
    every?: LikedSongWhereInput
    some?: LikedSongWhereInput
    none?: LikedSongWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isArtist?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isArtist?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isArtist?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PlaylistSongListRelationFilter = {
    every?: PlaylistSongWhereInput
    some?: PlaylistSongWhereInput
    none?: PlaylistSongWhereInput
  }

  export type SongStatsNullableScalarRelationFilter = {
    is?: SongStatsWhereInput | null
    isNot?: SongStatsWhereInput | null
  }

  export type PlaylistSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ipfsHash?: SortOrder
    previewIpfsHash?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
    forSale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ipfsHash?: SortOrder
    previewIpfsHash?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
    forSale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ipfsHash?: SortOrder
    previewIpfsHash?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
    forSale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
  }

  export type UserSubscriptionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
  }

  export type UserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planType?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    amount?: SortOrder
  }

  export type UserSubscriptionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ArtistMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    socialLinks?: SortOrder
    totalSongs?: SortOrder
    totalSales?: SortOrder
  }

  export type ArtistMetadataAvgOrderByAggregateInput = {
    totalSongs?: SortOrder
    totalSales?: SortOrder
  }

  export type ArtistMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    totalSongs?: SortOrder
    totalSales?: SortOrder
  }

  export type ArtistMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    totalSongs?: SortOrder
    totalSales?: SortOrder
  }

  export type ArtistMetadataSumOrderByAggregateInput = {
    totalSongs?: SortOrder
    totalSales?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    songCount?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    songCount?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    songCount?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    songCount?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    songCount?: SortOrder
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type SongScalarRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type PlaylistSongCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    position?: SortOrder
  }

  export type PlaylistSongAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type PlaylistSongMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    position?: SortOrder
  }

  export type PlaylistSongMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    songId?: SortOrder
    position?: SortOrder
  }

  export type PlaylistSongSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type FavoriteSongCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    addedAt?: SortOrder
  }

  export type FavoriteSongMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    addedAt?: SortOrder
  }

  export type FavoriteSongMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    addedAt?: SortOrder
  }

  export type LikedSongCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedSongMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    likedAt?: SortOrder
  }

  export type LikedSongMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    likedAt?: SortOrder
  }

  export type SongStatsCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    playCount?: SortOrder
    favoriteCount?: SortOrder
    likeCount?: SortOrder
    lastPlayed?: SortOrder
  }

  export type SongStatsAvgOrderByAggregateInput = {
    playCount?: SortOrder
    favoriteCount?: SortOrder
    likeCount?: SortOrder
  }

  export type SongStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    playCount?: SortOrder
    favoriteCount?: SortOrder
    likeCount?: SortOrder
    lastPlayed?: SortOrder
  }

  export type SongStatsMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    playCount?: SortOrder
    favoriteCount?: SortOrder
    likeCount?: SortOrder
    lastPlayed?: SortOrder
  }

  export type SongStatsSumOrderByAggregateInput = {
    playCount?: SortOrder
    favoriteCount?: SortOrder
    likeCount?: SortOrder
  }

  export type PlatformStatsCountOrderByAggregateInput = {
    id?: SortOrder
    totalSongs?: SortOrder
    totalUsers?: SortOrder
    totalArtists?: SortOrder
    totalPlays?: SortOrder
    totalSales?: SortOrder
    totalSalesVolume?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformStatsAvgOrderByAggregateInput = {
    totalSongs?: SortOrder
    totalUsers?: SortOrder
    totalArtists?: SortOrder
    totalPlays?: SortOrder
    totalSales?: SortOrder
    totalSalesVolume?: SortOrder
  }

  export type PlatformStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    totalSongs?: SortOrder
    totalUsers?: SortOrder
    totalArtists?: SortOrder
    totalPlays?: SortOrder
    totalSales?: SortOrder
    totalSalesVolume?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformStatsMinOrderByAggregateInput = {
    id?: SortOrder
    totalSongs?: SortOrder
    totalUsers?: SortOrder
    totalArtists?: SortOrder
    totalPlays?: SortOrder
    totalSales?: SortOrder
    totalSalesVolume?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformStatsSumOrderByAggregateInput = {
    totalSongs?: SortOrder
    totalUsers?: SortOrder
    totalArtists?: SortOrder
    totalPlays?: SortOrder
    totalSales?: SortOrder
    totalSalesVolume?: SortOrder
  }

  export type SongCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SongCreateWithoutOwnerInput, SongUncheckedCreateWithoutOwnerInput> | SongCreateWithoutOwnerInput[] | SongUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SongCreateOrConnectWithoutOwnerInput | SongCreateOrConnectWithoutOwnerInput[]
    createMany?: SongCreateManyOwnerInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type UserSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type ArtistMetadataCreateNestedOneWithoutUserInput = {
    create?: XOR<ArtistMetadataCreateWithoutUserInput, ArtistMetadataUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtistMetadataCreateOrConnectWithoutUserInput
    connect?: ArtistMetadataWhereUniqueInput
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type FavoriteSongCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteSongCreateWithoutUserInput, FavoriteSongUncheckedCreateWithoutUserInput> | FavoriteSongCreateWithoutUserInput[] | FavoriteSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteSongCreateOrConnectWithoutUserInput | FavoriteSongCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteSongCreateManyUserInputEnvelope
    connect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
  }

  export type LikedSongCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SongCreateWithoutOwnerInput, SongUncheckedCreateWithoutOwnerInput> | SongCreateWithoutOwnerInput[] | SongUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SongCreateOrConnectWithoutOwnerInput | SongCreateOrConnectWithoutOwnerInput[]
    createMany?: SongCreateManyOwnerInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type ArtistMetadataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ArtistMetadataCreateWithoutUserInput, ArtistMetadataUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtistMetadataCreateOrConnectWithoutUserInput
    connect?: ArtistMetadataWhereUniqueInput
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type FavoriteSongUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteSongCreateWithoutUserInput, FavoriteSongUncheckedCreateWithoutUserInput> | FavoriteSongCreateWithoutUserInput[] | FavoriteSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteSongCreateOrConnectWithoutUserInput | FavoriteSongCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteSongCreateManyUserInputEnvelope
    connect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
  }

  export type LikedSongUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SongUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SongCreateWithoutOwnerInput, SongUncheckedCreateWithoutOwnerInput> | SongCreateWithoutOwnerInput[] | SongUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SongCreateOrConnectWithoutOwnerInput | SongCreateOrConnectWithoutOwnerInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutOwnerInput | SongUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SongCreateManyOwnerInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutOwnerInput | SongUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SongUpdateManyWithWhereWithoutOwnerInput | SongUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type UserSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type ArtistMetadataUpdateOneWithoutUserNestedInput = {
    create?: XOR<ArtistMetadataCreateWithoutUserInput, ArtistMetadataUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtistMetadataCreateOrConnectWithoutUserInput
    upsert?: ArtistMetadataUpsertWithoutUserInput
    disconnect?: ArtistMetadataWhereInput | boolean
    delete?: ArtistMetadataWhereInput | boolean
    connect?: ArtistMetadataWhereUniqueInput
    update?: XOR<XOR<ArtistMetadataUpdateToOneWithWhereWithoutUserInput, ArtistMetadataUpdateWithoutUserInput>, ArtistMetadataUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type FavoriteSongUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteSongCreateWithoutUserInput, FavoriteSongUncheckedCreateWithoutUserInput> | FavoriteSongCreateWithoutUserInput[] | FavoriteSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteSongCreateOrConnectWithoutUserInput | FavoriteSongCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteSongUpsertWithWhereUniqueWithoutUserInput | FavoriteSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteSongCreateManyUserInputEnvelope
    set?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    disconnect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    delete?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    connect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    update?: FavoriteSongUpdateWithWhereUniqueWithoutUserInput | FavoriteSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteSongUpdateManyWithWhereWithoutUserInput | FavoriteSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteSongScalarWhereInput | FavoriteSongScalarWhereInput[]
  }

  export type LikedSongUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutUserInput | LikedSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutUserInput | LikedSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutUserInput | LikedSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SongCreateWithoutOwnerInput, SongUncheckedCreateWithoutOwnerInput> | SongCreateWithoutOwnerInput[] | SongUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SongCreateOrConnectWithoutOwnerInput | SongCreateOrConnectWithoutOwnerInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutOwnerInput | SongUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SongCreateManyOwnerInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutOwnerInput | SongUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SongUpdateManyWithWhereWithoutOwnerInput | SongUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type ArtistMetadataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ArtistMetadataCreateWithoutUserInput, ArtistMetadataUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtistMetadataCreateOrConnectWithoutUserInput
    upsert?: ArtistMetadataUpsertWithoutUserInput
    disconnect?: ArtistMetadataWhereInput | boolean
    delete?: ArtistMetadataWhereInput | boolean
    connect?: ArtistMetadataWhereUniqueInput
    update?: XOR<XOR<ArtistMetadataUpdateToOneWithWhereWithoutUserInput, ArtistMetadataUpdateWithoutUserInput>, ArtistMetadataUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type FavoriteSongUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteSongCreateWithoutUserInput, FavoriteSongUncheckedCreateWithoutUserInput> | FavoriteSongCreateWithoutUserInput[] | FavoriteSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteSongCreateOrConnectWithoutUserInput | FavoriteSongCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteSongUpsertWithWhereUniqueWithoutUserInput | FavoriteSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteSongCreateManyUserInputEnvelope
    set?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    disconnect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    delete?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    connect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    update?: FavoriteSongUpdateWithWhereUniqueWithoutUserInput | FavoriteSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteSongUpdateManyWithWhereWithoutUserInput | FavoriteSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteSongScalarWhereInput | FavoriteSongScalarWhereInput[]
  }

  export type LikedSongUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutUserInput | LikedSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutUserInput | LikedSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutUserInput | LikedSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSongsInput = {
    create?: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSongsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistSongCreateNestedManyWithoutSongInput = {
    create?: XOR<PlaylistSongCreateWithoutSongInput, PlaylistSongUncheckedCreateWithoutSongInput> | PlaylistSongCreateWithoutSongInput[] | PlaylistSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutSongInput | PlaylistSongCreateOrConnectWithoutSongInput[]
    createMany?: PlaylistSongCreateManySongInputEnvelope
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
  }

  export type FavoriteSongCreateNestedManyWithoutSongInput = {
    create?: XOR<FavoriteSongCreateWithoutSongInput, FavoriteSongUncheckedCreateWithoutSongInput> | FavoriteSongCreateWithoutSongInput[] | FavoriteSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: FavoriteSongCreateOrConnectWithoutSongInput | FavoriteSongCreateOrConnectWithoutSongInput[]
    createMany?: FavoriteSongCreateManySongInputEnvelope
    connect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
  }

  export type LikedSongCreateNestedManyWithoutSongInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type SongStatsCreateNestedOneWithoutSongInput = {
    create?: XOR<SongStatsCreateWithoutSongInput, SongStatsUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongStatsCreateOrConnectWithoutSongInput
    connect?: SongStatsWhereUniqueInput
  }

  export type PlaylistSongUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<PlaylistSongCreateWithoutSongInput, PlaylistSongUncheckedCreateWithoutSongInput> | PlaylistSongCreateWithoutSongInput[] | PlaylistSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutSongInput | PlaylistSongCreateOrConnectWithoutSongInput[]
    createMany?: PlaylistSongCreateManySongInputEnvelope
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
  }

  export type FavoriteSongUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<FavoriteSongCreateWithoutSongInput, FavoriteSongUncheckedCreateWithoutSongInput> | FavoriteSongCreateWithoutSongInput[] | FavoriteSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: FavoriteSongCreateOrConnectWithoutSongInput | FavoriteSongCreateOrConnectWithoutSongInput[]
    createMany?: FavoriteSongCreateManySongInputEnvelope
    connect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
  }

  export type LikedSongUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type SongStatsUncheckedCreateNestedOneWithoutSongInput = {
    create?: XOR<SongStatsCreateWithoutSongInput, SongStatsUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongStatsCreateOrConnectWithoutSongInput
    connect?: SongStatsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneWithoutSongsNestedInput = {
    create?: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSongsInput
    upsert?: UserUpsertWithoutSongsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSongsInput, UserUpdateWithoutSongsInput>, UserUncheckedUpdateWithoutSongsInput>
  }

  export type PlaylistSongUpdateManyWithoutSongNestedInput = {
    create?: XOR<PlaylistSongCreateWithoutSongInput, PlaylistSongUncheckedCreateWithoutSongInput> | PlaylistSongCreateWithoutSongInput[] | PlaylistSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutSongInput | PlaylistSongCreateOrConnectWithoutSongInput[]
    upsert?: PlaylistSongUpsertWithWhereUniqueWithoutSongInput | PlaylistSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: PlaylistSongCreateManySongInputEnvelope
    set?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    disconnect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    delete?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    update?: PlaylistSongUpdateWithWhereUniqueWithoutSongInput | PlaylistSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: PlaylistSongUpdateManyWithWhereWithoutSongInput | PlaylistSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
  }

  export type FavoriteSongUpdateManyWithoutSongNestedInput = {
    create?: XOR<FavoriteSongCreateWithoutSongInput, FavoriteSongUncheckedCreateWithoutSongInput> | FavoriteSongCreateWithoutSongInput[] | FavoriteSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: FavoriteSongCreateOrConnectWithoutSongInput | FavoriteSongCreateOrConnectWithoutSongInput[]
    upsert?: FavoriteSongUpsertWithWhereUniqueWithoutSongInput | FavoriteSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: FavoriteSongCreateManySongInputEnvelope
    set?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    disconnect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    delete?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    connect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    update?: FavoriteSongUpdateWithWhereUniqueWithoutSongInput | FavoriteSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: FavoriteSongUpdateManyWithWhereWithoutSongInput | FavoriteSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: FavoriteSongScalarWhereInput | FavoriteSongScalarWhereInput[]
  }

  export type LikedSongUpdateManyWithoutSongNestedInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutSongInput | LikedSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutSongInput | LikedSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutSongInput | LikedSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type SongStatsUpdateOneWithoutSongNestedInput = {
    create?: XOR<SongStatsCreateWithoutSongInput, SongStatsUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongStatsCreateOrConnectWithoutSongInput
    upsert?: SongStatsUpsertWithoutSongInput
    disconnect?: SongStatsWhereInput | boolean
    delete?: SongStatsWhereInput | boolean
    connect?: SongStatsWhereUniqueInput
    update?: XOR<XOR<SongStatsUpdateToOneWithWhereWithoutSongInput, SongStatsUpdateWithoutSongInput>, SongStatsUncheckedUpdateWithoutSongInput>
  }

  export type PlaylistSongUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<PlaylistSongCreateWithoutSongInput, PlaylistSongUncheckedCreateWithoutSongInput> | PlaylistSongCreateWithoutSongInput[] | PlaylistSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutSongInput | PlaylistSongCreateOrConnectWithoutSongInput[]
    upsert?: PlaylistSongUpsertWithWhereUniqueWithoutSongInput | PlaylistSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: PlaylistSongCreateManySongInputEnvelope
    set?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    disconnect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    delete?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    update?: PlaylistSongUpdateWithWhereUniqueWithoutSongInput | PlaylistSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: PlaylistSongUpdateManyWithWhereWithoutSongInput | PlaylistSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
  }

  export type FavoriteSongUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<FavoriteSongCreateWithoutSongInput, FavoriteSongUncheckedCreateWithoutSongInput> | FavoriteSongCreateWithoutSongInput[] | FavoriteSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: FavoriteSongCreateOrConnectWithoutSongInput | FavoriteSongCreateOrConnectWithoutSongInput[]
    upsert?: FavoriteSongUpsertWithWhereUniqueWithoutSongInput | FavoriteSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: FavoriteSongCreateManySongInputEnvelope
    set?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    disconnect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    delete?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    connect?: FavoriteSongWhereUniqueInput | FavoriteSongWhereUniqueInput[]
    update?: FavoriteSongUpdateWithWhereUniqueWithoutSongInput | FavoriteSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: FavoriteSongUpdateManyWithWhereWithoutSongInput | FavoriteSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: FavoriteSongScalarWhereInput | FavoriteSongScalarWhereInput[]
  }

  export type LikedSongUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutSongInput | LikedSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutSongInput | LikedSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutSongInput | LikedSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type SongStatsUncheckedUpdateOneWithoutSongNestedInput = {
    create?: XOR<SongStatsCreateWithoutSongInput, SongStatsUncheckedCreateWithoutSongInput>
    connectOrCreate?: SongStatsCreateOrConnectWithoutSongInput
    upsert?: SongStatsUpsertWithoutSongInput
    disconnect?: SongStatsWhereInput | boolean
    delete?: SongStatsWhereInput | boolean
    connect?: SongStatsWhereUniqueInput
    update?: XOR<XOR<SongStatsUpdateToOneWithWhereWithoutSongInput, SongStatsUpdateWithoutSongInput>, SongStatsUncheckedUpdateWithoutSongInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutArtistMetadataInput = {
    create?: XOR<UserCreateWithoutArtistMetadataInput, UserUncheckedCreateWithoutArtistMetadataInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistMetadataInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutArtistMetadataNestedInput = {
    create?: XOR<UserCreateWithoutArtistMetadataInput, UserUncheckedCreateWithoutArtistMetadataInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistMetadataInput
    upsert?: UserUpsertWithoutArtistMetadataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArtistMetadataInput, UserUpdateWithoutArtistMetadataInput>, UserUncheckedUpdateWithoutArtistMetadataInput>
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistSongCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistSongCreateWithoutPlaylistInput, PlaylistSongUncheckedCreateWithoutPlaylistInput> | PlaylistSongCreateWithoutPlaylistInput[] | PlaylistSongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutPlaylistInput | PlaylistSongCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistSongCreateManyPlaylistInputEnvelope
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
  }

  export type PlaylistSongUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistSongCreateWithoutPlaylistInput, PlaylistSongUncheckedCreateWithoutPlaylistInput> | PlaylistSongCreateWithoutPlaylistInput[] | PlaylistSongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutPlaylistInput | PlaylistSongCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistSongCreateManyPlaylistInputEnvelope
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type PlaylistSongUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistSongCreateWithoutPlaylistInput, PlaylistSongUncheckedCreateWithoutPlaylistInput> | PlaylistSongCreateWithoutPlaylistInput[] | PlaylistSongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutPlaylistInput | PlaylistSongCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistSongCreateManyPlaylistInputEnvelope
    set?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    disconnect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    delete?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    update?: PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistSongUpdateManyWithWhereWithoutPlaylistInput | PlaylistSongUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
  }

  export type PlaylistSongUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistSongCreateWithoutPlaylistInput, PlaylistSongUncheckedCreateWithoutPlaylistInput> | PlaylistSongCreateWithoutPlaylistInput[] | PlaylistSongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutPlaylistInput | PlaylistSongCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistSongCreateManyPlaylistInputEnvelope
    set?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    disconnect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    delete?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    update?: PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistSongUpdateManyWithWhereWithoutPlaylistInput | PlaylistSongUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutSongsInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutPlaylistSongsInput = {
    create?: XOR<SongCreateWithoutPlaylistSongsInput, SongUncheckedCreateWithoutPlaylistSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistSongsInput
    connect?: SongWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongsInput
    upsert?: PlaylistUpsertWithoutSongsInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutSongsInput, PlaylistUpdateWithoutSongsInput>, PlaylistUncheckedUpdateWithoutSongsInput>
  }

  export type SongUpdateOneRequiredWithoutPlaylistSongsNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistSongsInput, SongUncheckedCreateWithoutPlaylistSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistSongsInput
    upsert?: SongUpsertWithoutPlaylistSongsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutPlaylistSongsInput, SongUpdateWithoutPlaylistSongsInput>, SongUncheckedUpdateWithoutPlaylistSongsInput>
  }

  export type UserCreateNestedOneWithoutFavoriteSongsInput = {
    create?: XOR<UserCreateWithoutFavoriteSongsInput, UserUncheckedCreateWithoutFavoriteSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteSongsInput
    connect?: UserWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutFavoriteSongsInput = {
    create?: XOR<SongCreateWithoutFavoriteSongsInput, SongUncheckedCreateWithoutFavoriteSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutFavoriteSongsInput
    connect?: SongWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteSongsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteSongsInput, UserUncheckedCreateWithoutFavoriteSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteSongsInput
    upsert?: UserUpsertWithoutFavoriteSongsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteSongsInput, UserUpdateWithoutFavoriteSongsInput>, UserUncheckedUpdateWithoutFavoriteSongsInput>
  }

  export type SongUpdateOneRequiredWithoutFavoriteSongsNestedInput = {
    create?: XOR<SongCreateWithoutFavoriteSongsInput, SongUncheckedCreateWithoutFavoriteSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutFavoriteSongsInput
    upsert?: SongUpsertWithoutFavoriteSongsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutFavoriteSongsInput, SongUpdateWithoutFavoriteSongsInput>, SongUncheckedUpdateWithoutFavoriteSongsInput>
  }

  export type UserCreateNestedOneWithoutLikedSongsInput = {
    create?: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedSongsInput
    connect?: UserWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutLikedSongsInput = {
    create?: XOR<SongCreateWithoutLikedSongsInput, SongUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutLikedSongsInput
    connect?: SongWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedSongsNestedInput = {
    create?: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedSongsInput
    upsert?: UserUpsertWithoutLikedSongsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedSongsInput, UserUpdateWithoutLikedSongsInput>, UserUncheckedUpdateWithoutLikedSongsInput>
  }

  export type SongUpdateOneRequiredWithoutLikedSongsNestedInput = {
    create?: XOR<SongCreateWithoutLikedSongsInput, SongUncheckedCreateWithoutLikedSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutLikedSongsInput
    upsert?: SongUpsertWithoutLikedSongsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutLikedSongsInput, SongUpdateWithoutLikedSongsInput>, SongUncheckedUpdateWithoutLikedSongsInput>
  }

  export type SongCreateNestedOneWithoutStatsInput = {
    create?: XOR<SongCreateWithoutStatsInput, SongUncheckedCreateWithoutStatsInput>
    connectOrCreate?: SongCreateOrConnectWithoutStatsInput
    connect?: SongWhereUniqueInput
  }

  export type SongUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<SongCreateWithoutStatsInput, SongUncheckedCreateWithoutStatsInput>
    connectOrCreate?: SongCreateOrConnectWithoutStatsInput
    upsert?: SongUpsertWithoutStatsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutStatsInput, SongUpdateWithoutStatsInput>, SongUncheckedUpdateWithoutStatsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SongCreateWithoutOwnerInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    playlistSongs?: PlaylistSongCreateNestedManyWithoutSongInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongCreateNestedManyWithoutSongInput
    stats?: SongStatsCreateNestedOneWithoutSongInput
  }

  export type SongUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    playlistSongs?: PlaylistSongUncheckedCreateNestedManyWithoutSongInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutSongInput
    stats?: SongStatsUncheckedCreateNestedOneWithoutSongInput
  }

  export type SongCreateOrConnectWithoutOwnerInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutOwnerInput, SongUncheckedCreateWithoutOwnerInput>
  }

  export type SongCreateManyOwnerInputEnvelope = {
    data: SongCreateManyOwnerInput | SongCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionCreateWithoutUserInput = {
    id?: string
    planType: string
    isActive?: boolean | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    amount?: Decimal | DecimalJsLike | number | string | null
  }

  export type UserSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    planType: string
    isActive?: boolean | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    amount?: Decimal | DecimalJsLike | number | string | null
  }

  export type UserSubscriptionCreateOrConnectWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionCreateManyUserInputEnvelope = {
    data: UserSubscriptionCreateManyUserInput | UserSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArtistMetadataCreateWithoutUserInput = {
    id?: string
    profileImage?: string | null
    bio?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: number | null
    totalSales?: number | null
  }

  export type ArtistMetadataUncheckedCreateWithoutUserInput = {
    id?: string
    profileImage?: string | null
    bio?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: number | null
    totalSales?: number | null
  }

  export type ArtistMetadataCreateOrConnectWithoutUserInput = {
    where: ArtistMetadataWhereUniqueInput
    create: XOR<ArtistMetadataCreateWithoutUserInput, ArtistMetadataUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    songCount?: number | null
    songs?: PlaylistSongCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    songCount?: number | null
    songs?: PlaylistSongUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteSongCreateWithoutUserInput = {
    id?: string
    addedAt?: Date | string | null
    song: SongCreateNestedOneWithoutFavoriteSongsInput
  }

  export type FavoriteSongUncheckedCreateWithoutUserInput = {
    id?: string
    songId: string
    addedAt?: Date | string | null
  }

  export type FavoriteSongCreateOrConnectWithoutUserInput = {
    where: FavoriteSongWhereUniqueInput
    create: XOR<FavoriteSongCreateWithoutUserInput, FavoriteSongUncheckedCreateWithoutUserInput>
  }

  export type FavoriteSongCreateManyUserInputEnvelope = {
    data: FavoriteSongCreateManyUserInput | FavoriteSongCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikedSongCreateWithoutUserInput = {
    id?: string
    likedAt?: Date | string | null
    song: SongCreateNestedOneWithoutLikedSongsInput
  }

  export type LikedSongUncheckedCreateWithoutUserInput = {
    id?: string
    songId: string
    likedAt?: Date | string | null
  }

  export type LikedSongCreateOrConnectWithoutUserInput = {
    where: LikedSongWhereUniqueInput
    create: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput>
  }

  export type LikedSongCreateManyUserInputEnvelope = {
    data: LikedSongCreateManyUserInput | LikedSongCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SongUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutOwnerInput, SongUncheckedUpdateWithoutOwnerInput>
    create: XOR<SongCreateWithoutOwnerInput, SongUncheckedCreateWithoutOwnerInput>
  }

  export type SongUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutOwnerInput, SongUncheckedUpdateWithoutOwnerInput>
  }

  export type SongUpdateManyWithWhereWithoutOwnerInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SongScalarWhereInput = {
    AND?: SongScalarWhereInput | SongScalarWhereInput[]
    OR?: SongScalarWhereInput[]
    NOT?: SongScalarWhereInput | SongScalarWhereInput[]
    id?: UuidFilter<"Song"> | string
    name?: StringFilter<"Song"> | string
    ipfsHash?: StringFilter<"Song"> | string
    previewIpfsHash?: StringFilter<"Song"> | string
    price?: DecimalFilter<"Song"> | Decimal | DecimalJsLike | number | string
    ownerId?: UuidNullableFilter<"Song"> | string | null
    forSale?: BoolNullableFilter<"Song"> | boolean | null
    createdAt?: DateTimeNullableFilter<"Song"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Song"> | Date | string | null
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSubscriptionScalarWhereInput = {
    AND?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    OR?: UserSubscriptionScalarWhereInput[]
    NOT?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    id?: UuidFilter<"UserSubscription"> | string
    userId?: UuidFilter<"UserSubscription"> | string
    planType?: StringFilter<"UserSubscription"> | string
    isActive?: BoolNullableFilter<"UserSubscription"> | boolean | null
    startDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    endDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    amount?: DecimalNullableFilter<"UserSubscription"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ArtistMetadataUpsertWithoutUserInput = {
    update: XOR<ArtistMetadataUpdateWithoutUserInput, ArtistMetadataUncheckedUpdateWithoutUserInput>
    create: XOR<ArtistMetadataCreateWithoutUserInput, ArtistMetadataUncheckedCreateWithoutUserInput>
    where?: ArtistMetadataWhereInput
  }

  export type ArtistMetadataUpdateToOneWithWhereWithoutUserInput = {
    where?: ArtistMetadataWhereInput
    data: XOR<ArtistMetadataUpdateWithoutUserInput, ArtistMetadataUncheckedUpdateWithoutUserInput>
  }

  export type ArtistMetadataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArtistMetadataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    totalSongs?: NullableIntFieldUpdateOperationsInput | number | null
    totalSales?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: UuidFilter<"Playlist"> | string
    userId?: UuidFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    createdAt?: DateTimeNullableFilter<"Playlist"> | Date | string | null
    songCount?: IntNullableFilter<"Playlist"> | number | null
  }

  export type FavoriteSongUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteSongWhereUniqueInput
    update: XOR<FavoriteSongUpdateWithoutUserInput, FavoriteSongUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteSongCreateWithoutUserInput, FavoriteSongUncheckedCreateWithoutUserInput>
  }

  export type FavoriteSongUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteSongWhereUniqueInput
    data: XOR<FavoriteSongUpdateWithoutUserInput, FavoriteSongUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteSongUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteSongScalarWhereInput
    data: XOR<FavoriteSongUpdateManyMutationInput, FavoriteSongUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteSongScalarWhereInput = {
    AND?: FavoriteSongScalarWhereInput | FavoriteSongScalarWhereInput[]
    OR?: FavoriteSongScalarWhereInput[]
    NOT?: FavoriteSongScalarWhereInput | FavoriteSongScalarWhereInput[]
    id?: UuidFilter<"FavoriteSong"> | string
    userId?: UuidFilter<"FavoriteSong"> | string
    songId?: UuidFilter<"FavoriteSong"> | string
    addedAt?: DateTimeNullableFilter<"FavoriteSong"> | Date | string | null
  }

  export type LikedSongUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedSongWhereUniqueInput
    update: XOR<LikedSongUpdateWithoutUserInput, LikedSongUncheckedUpdateWithoutUserInput>
    create: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput>
  }

  export type LikedSongUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedSongWhereUniqueInput
    data: XOR<LikedSongUpdateWithoutUserInput, LikedSongUncheckedUpdateWithoutUserInput>
  }

  export type LikedSongUpdateManyWithWhereWithoutUserInput = {
    where: LikedSongScalarWhereInput
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedSongScalarWhereInput = {
    AND?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
    OR?: LikedSongScalarWhereInput[]
    NOT?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
    id?: UuidFilter<"LikedSong"> | string
    userId?: UuidFilter<"LikedSong"> | string
    songId?: UuidFilter<"LikedSong"> | string
    likedAt?: DateTimeNullableFilter<"LikedSong"> | Date | string | null
  }

  export type UserCreateWithoutSongsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataCreateNestedOneWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSongsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataUncheckedCreateNestedOneWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput>
  }

  export type PlaylistSongCreateWithoutSongInput = {
    id?: string
    position?: number | null
    playlist: PlaylistCreateNestedOneWithoutSongsInput
  }

  export type PlaylistSongUncheckedCreateWithoutSongInput = {
    id?: string
    playlistId: string
    position?: number | null
  }

  export type PlaylistSongCreateOrConnectWithoutSongInput = {
    where: PlaylistSongWhereUniqueInput
    create: XOR<PlaylistSongCreateWithoutSongInput, PlaylistSongUncheckedCreateWithoutSongInput>
  }

  export type PlaylistSongCreateManySongInputEnvelope = {
    data: PlaylistSongCreateManySongInput | PlaylistSongCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteSongCreateWithoutSongInput = {
    id?: string
    addedAt?: Date | string | null
    user: UserCreateNestedOneWithoutFavoriteSongsInput
  }

  export type FavoriteSongUncheckedCreateWithoutSongInput = {
    id?: string
    userId: string
    addedAt?: Date | string | null
  }

  export type FavoriteSongCreateOrConnectWithoutSongInput = {
    where: FavoriteSongWhereUniqueInput
    create: XOR<FavoriteSongCreateWithoutSongInput, FavoriteSongUncheckedCreateWithoutSongInput>
  }

  export type FavoriteSongCreateManySongInputEnvelope = {
    data: FavoriteSongCreateManySongInput | FavoriteSongCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type LikedSongCreateWithoutSongInput = {
    id?: string
    likedAt?: Date | string | null
    user: UserCreateNestedOneWithoutLikedSongsInput
  }

  export type LikedSongUncheckedCreateWithoutSongInput = {
    id?: string
    userId: string
    likedAt?: Date | string | null
  }

  export type LikedSongCreateOrConnectWithoutSongInput = {
    where: LikedSongWhereUniqueInput
    create: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput>
  }

  export type LikedSongCreateManySongInputEnvelope = {
    data: LikedSongCreateManySongInput | LikedSongCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type SongStatsCreateWithoutSongInput = {
    id?: string
    playCount?: number | null
    favoriteCount?: number | null
    likeCount?: number | null
    lastPlayed?: Date | string | null
  }

  export type SongStatsUncheckedCreateWithoutSongInput = {
    id?: string
    playCount?: number | null
    favoriteCount?: number | null
    likeCount?: number | null
    lastPlayed?: Date | string | null
  }

  export type SongStatsCreateOrConnectWithoutSongInput = {
    where: SongStatsWhereUniqueInput
    create: XOR<SongStatsCreateWithoutSongInput, SongStatsUncheckedCreateWithoutSongInput>
  }

  export type UserUpsertWithoutSongsInput = {
    update: XOR<UserUpdateWithoutSongsInput, UserUncheckedUpdateWithoutSongsInput>
    create: XOR<UserCreateWithoutSongsInput, UserUncheckedCreateWithoutSongsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSongsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSongsInput, UserUncheckedUpdateWithoutSongsInput>
  }

  export type UserUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUncheckedUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistSongUpsertWithWhereUniqueWithoutSongInput = {
    where: PlaylistSongWhereUniqueInput
    update: XOR<PlaylistSongUpdateWithoutSongInput, PlaylistSongUncheckedUpdateWithoutSongInput>
    create: XOR<PlaylistSongCreateWithoutSongInput, PlaylistSongUncheckedCreateWithoutSongInput>
  }

  export type PlaylistSongUpdateWithWhereUniqueWithoutSongInput = {
    where: PlaylistSongWhereUniqueInput
    data: XOR<PlaylistSongUpdateWithoutSongInput, PlaylistSongUncheckedUpdateWithoutSongInput>
  }

  export type PlaylistSongUpdateManyWithWhereWithoutSongInput = {
    where: PlaylistSongScalarWhereInput
    data: XOR<PlaylistSongUpdateManyMutationInput, PlaylistSongUncheckedUpdateManyWithoutSongInput>
  }

  export type PlaylistSongScalarWhereInput = {
    AND?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
    OR?: PlaylistSongScalarWhereInput[]
    NOT?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
    id?: UuidFilter<"PlaylistSong"> | string
    playlistId?: UuidFilter<"PlaylistSong"> | string
    songId?: UuidFilter<"PlaylistSong"> | string
    position?: IntNullableFilter<"PlaylistSong"> | number | null
  }

  export type FavoriteSongUpsertWithWhereUniqueWithoutSongInput = {
    where: FavoriteSongWhereUniqueInput
    update: XOR<FavoriteSongUpdateWithoutSongInput, FavoriteSongUncheckedUpdateWithoutSongInput>
    create: XOR<FavoriteSongCreateWithoutSongInput, FavoriteSongUncheckedCreateWithoutSongInput>
  }

  export type FavoriteSongUpdateWithWhereUniqueWithoutSongInput = {
    where: FavoriteSongWhereUniqueInput
    data: XOR<FavoriteSongUpdateWithoutSongInput, FavoriteSongUncheckedUpdateWithoutSongInput>
  }

  export type FavoriteSongUpdateManyWithWhereWithoutSongInput = {
    where: FavoriteSongScalarWhereInput
    data: XOR<FavoriteSongUpdateManyMutationInput, FavoriteSongUncheckedUpdateManyWithoutSongInput>
  }

  export type LikedSongUpsertWithWhereUniqueWithoutSongInput = {
    where: LikedSongWhereUniqueInput
    update: XOR<LikedSongUpdateWithoutSongInput, LikedSongUncheckedUpdateWithoutSongInput>
    create: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput>
  }

  export type LikedSongUpdateWithWhereUniqueWithoutSongInput = {
    where: LikedSongWhereUniqueInput
    data: XOR<LikedSongUpdateWithoutSongInput, LikedSongUncheckedUpdateWithoutSongInput>
  }

  export type LikedSongUpdateManyWithWhereWithoutSongInput = {
    where: LikedSongScalarWhereInput
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyWithoutSongInput>
  }

  export type SongStatsUpsertWithoutSongInput = {
    update: XOR<SongStatsUpdateWithoutSongInput, SongStatsUncheckedUpdateWithoutSongInput>
    create: XOR<SongStatsCreateWithoutSongInput, SongStatsUncheckedCreateWithoutSongInput>
    where?: SongStatsWhereInput
  }

  export type SongStatsUpdateToOneWithWhereWithoutSongInput = {
    where?: SongStatsWhereInput
    data: XOR<SongStatsUpdateWithoutSongInput, SongStatsUncheckedUpdateWithoutSongInput>
  }

  export type SongStatsUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    playCount?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteCount?: NullableIntFieldUpdateOperationsInput | number | null
    likeCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastPlayed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SongStatsUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    playCount?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteCount?: NullableIntFieldUpdateOperationsInput | number | null
    likeCount?: NullableIntFieldUpdateOperationsInput | number | null
    lastPlayed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongCreateNestedManyWithoutOwnerInput
    artistMetadata?: ArtistMetadataCreateNestedOneWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongUncheckedCreateNestedManyWithoutOwnerInput
    artistMetadata?: ArtistMetadataUncheckedCreateNestedOneWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUpdateManyWithoutOwnerNestedInput
    artistMetadata?: ArtistMetadataUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUncheckedUpdateManyWithoutOwnerNestedInput
    artistMetadata?: ArtistMetadataUncheckedUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutArtistMetadataInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArtistMetadataInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongUncheckedCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArtistMetadataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArtistMetadataInput, UserUncheckedCreateWithoutArtistMetadataInput>
  }

  export type UserUpsertWithoutArtistMetadataInput = {
    update: XOR<UserUpdateWithoutArtistMetadataInput, UserUncheckedUpdateWithoutArtistMetadataInput>
    create: XOR<UserCreateWithoutArtistMetadataInput, UserUncheckedCreateWithoutArtistMetadataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArtistMetadataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArtistMetadataInput, UserUncheckedUpdateWithoutArtistMetadataInput>
  }

  export type UserUpdateWithoutArtistMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArtistMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUncheckedUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPlaylistsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataCreateNestedOneWithoutUserInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongUncheckedCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataUncheckedCreateNestedOneWithoutUserInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type PlaylistSongCreateWithoutPlaylistInput = {
    id?: string
    position?: number | null
    song: SongCreateNestedOneWithoutPlaylistSongsInput
  }

  export type PlaylistSongUncheckedCreateWithoutPlaylistInput = {
    id?: string
    songId: string
    position?: number | null
  }

  export type PlaylistSongCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistSongWhereUniqueInput
    create: XOR<PlaylistSongCreateWithoutPlaylistInput, PlaylistSongUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistSongCreateManyPlaylistInputEnvelope = {
    data: PlaylistSongCreateManyPlaylistInput | PlaylistSongCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUpdateOneWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUncheckedUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUncheckedUpdateOneWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistSongWhereUniqueInput
    update: XOR<PlaylistSongUpdateWithoutPlaylistInput, PlaylistSongUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistSongCreateWithoutPlaylistInput, PlaylistSongUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistSongWhereUniqueInput
    data: XOR<PlaylistSongUpdateWithoutPlaylistInput, PlaylistSongUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistSongUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistSongScalarWhereInput
    data: XOR<PlaylistSongUpdateManyMutationInput, PlaylistSongUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistCreateWithoutSongsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    songCount?: number | null
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutSongsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    songCount?: number | null
  }

  export type PlaylistCreateOrConnectWithoutSongsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
  }

  export type SongCreateWithoutPlaylistSongsInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    owner?: UserCreateNestedOneWithoutSongsInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongCreateNestedManyWithoutSongInput
    stats?: SongStatsCreateNestedOneWithoutSongInput
  }

  export type SongUncheckedCreateWithoutPlaylistSongsInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    ownerId?: string | null
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutSongInput
    stats?: SongStatsUncheckedCreateNestedOneWithoutSongInput
  }

  export type SongCreateOrConnectWithoutPlaylistSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlaylistSongsInput, SongUncheckedCreateWithoutPlaylistSongsInput>
  }

  export type PlaylistUpsertWithoutSongsInput = {
    update: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
    create: XOR<PlaylistCreateWithoutSongsInput, PlaylistUncheckedCreateWithoutSongsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutSongsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutSongsInput, PlaylistUncheckedUpdateWithoutSongsInput>
  }

  export type PlaylistUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songCount?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SongUpsertWithoutPlaylistSongsInput = {
    update: XOR<SongUpdateWithoutPlaylistSongsInput, SongUncheckedUpdateWithoutPlaylistSongsInput>
    create: XOR<SongCreateWithoutPlaylistSongsInput, SongUncheckedCreateWithoutPlaylistSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutPlaylistSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutPlaylistSongsInput, SongUncheckedUpdateWithoutPlaylistSongsInput>
  }

  export type SongUpdateWithoutPlaylistSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutSongsNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUpdateManyWithoutSongNestedInput
    stats?: SongStatsUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutPlaylistSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
    stats?: SongStatsUncheckedUpdateOneWithoutSongNestedInput
  }

  export type UserCreateWithoutFavoriteSongsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataCreateNestedOneWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteSongsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongUncheckedCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataUncheckedCreateNestedOneWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteSongsInput, UserUncheckedCreateWithoutFavoriteSongsInput>
  }

  export type SongCreateWithoutFavoriteSongsInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    owner?: UserCreateNestedOneWithoutSongsInput
    playlistSongs?: PlaylistSongCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongCreateNestedManyWithoutSongInput
    stats?: SongStatsCreateNestedOneWithoutSongInput
  }

  export type SongUncheckedCreateWithoutFavoriteSongsInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    ownerId?: string | null
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    playlistSongs?: PlaylistSongUncheckedCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutSongInput
    stats?: SongStatsUncheckedCreateNestedOneWithoutSongInput
  }

  export type SongCreateOrConnectWithoutFavoriteSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutFavoriteSongsInput, SongUncheckedCreateWithoutFavoriteSongsInput>
  }

  export type UserUpsertWithoutFavoriteSongsInput = {
    update: XOR<UserUpdateWithoutFavoriteSongsInput, UserUncheckedUpdateWithoutFavoriteSongsInput>
    create: XOR<UserCreateWithoutFavoriteSongsInput, UserUncheckedCreateWithoutFavoriteSongsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteSongsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteSongsInput, UserUncheckedUpdateWithoutFavoriteSongsInput>
  }

  export type UserUpdateWithoutFavoriteSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUncheckedUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUncheckedUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SongUpsertWithoutFavoriteSongsInput = {
    update: XOR<SongUpdateWithoutFavoriteSongsInput, SongUncheckedUpdateWithoutFavoriteSongsInput>
    create: XOR<SongCreateWithoutFavoriteSongsInput, SongUncheckedCreateWithoutFavoriteSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutFavoriteSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutFavoriteSongsInput, SongUncheckedUpdateWithoutFavoriteSongsInput>
  }

  export type SongUpdateWithoutFavoriteSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutSongsNestedInput
    playlistSongs?: PlaylistSongUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUpdateManyWithoutSongNestedInput
    stats?: SongStatsUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutFavoriteSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlistSongs?: PlaylistSongUncheckedUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
    stats?: SongStatsUncheckedUpdateOneWithoutSongNestedInput
  }

  export type UserCreateWithoutLikedSongsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataCreateNestedOneWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedSongsInput = {
    id?: string
    walletAddress: string
    username?: string | null
    email?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isArtist?: boolean | null
    songs?: SongUncheckedCreateNestedManyWithoutOwnerInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    artistMetadata?: ArtistMetadataUncheckedCreateNestedOneWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
  }

  export type SongCreateWithoutLikedSongsInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    owner?: UserCreateNestedOneWithoutSongsInput
    playlistSongs?: PlaylistSongCreateNestedManyWithoutSongInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutSongInput
    stats?: SongStatsCreateNestedOneWithoutSongInput
  }

  export type SongUncheckedCreateWithoutLikedSongsInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    ownerId?: string | null
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    playlistSongs?: PlaylistSongUncheckedCreateNestedManyWithoutSongInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutSongInput
    stats?: SongStatsUncheckedCreateNestedOneWithoutSongInput
  }

  export type SongCreateOrConnectWithoutLikedSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutLikedSongsInput, SongUncheckedCreateWithoutLikedSongsInput>
  }

  export type UserUpsertWithoutLikedSongsInput = {
    update: XOR<UserUpdateWithoutLikedSongsInput, UserUncheckedUpdateWithoutLikedSongsInput>
    create: XOR<UserCreateWithoutLikedSongsInput, UserUncheckedCreateWithoutLikedSongsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedSongsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedSongsInput, UserUncheckedUpdateWithoutLikedSongsInput>
  }

  export type UserUpdateWithoutLikedSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArtist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    songs?: SongUncheckedUpdateManyWithoutOwnerNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    artistMetadata?: ArtistMetadataUncheckedUpdateOneWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SongUpsertWithoutLikedSongsInput = {
    update: XOR<SongUpdateWithoutLikedSongsInput, SongUncheckedUpdateWithoutLikedSongsInput>
    create: XOR<SongCreateWithoutLikedSongsInput, SongUncheckedCreateWithoutLikedSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutLikedSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutLikedSongsInput, SongUncheckedUpdateWithoutLikedSongsInput>
  }

  export type SongUpdateWithoutLikedSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutSongsNestedInput
    playlistSongs?: PlaylistSongUpdateManyWithoutSongNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutSongNestedInput
    stats?: SongStatsUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutLikedSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlistSongs?: PlaylistSongUncheckedUpdateManyWithoutSongNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutSongNestedInput
    stats?: SongStatsUncheckedUpdateOneWithoutSongNestedInput
  }

  export type SongCreateWithoutStatsInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    owner?: UserCreateNestedOneWithoutSongsInput
    playlistSongs?: PlaylistSongCreateNestedManyWithoutSongInput
    favoriteSongs?: FavoriteSongCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutStatsInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    ownerId?: string | null
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    playlistSongs?: PlaylistSongUncheckedCreateNestedManyWithoutSongInput
    favoriteSongs?: FavoriteSongUncheckedCreateNestedManyWithoutSongInput
    likedSongs?: LikedSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutStatsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutStatsInput, SongUncheckedCreateWithoutStatsInput>
  }

  export type SongUpsertWithoutStatsInput = {
    update: XOR<SongUpdateWithoutStatsInput, SongUncheckedUpdateWithoutStatsInput>
    create: XOR<SongCreateWithoutStatsInput, SongUncheckedCreateWithoutStatsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutStatsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutStatsInput, SongUncheckedUpdateWithoutStatsInput>
  }

  export type SongUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutSongsNestedInput
    playlistSongs?: PlaylistSongUpdateManyWithoutSongNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlistSongs?: PlaylistSongUncheckedUpdateManyWithoutSongNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyOwnerInput = {
    id?: string
    name: string
    ipfsHash: string
    previewIpfsHash: string
    price: Decimal | DecimalJsLike | number | string
    forSale?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserSubscriptionCreateManyUserInput = {
    id?: string
    planType: string
    isActive?: boolean | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    amount?: Decimal | DecimalJsLike | number | string | null
  }

  export type PlaylistCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    songCount?: number | null
  }

  export type FavoriteSongCreateManyUserInput = {
    id?: string
    songId: string
    addedAt?: Date | string | null
  }

  export type LikedSongCreateManyUserInput = {
    id?: string
    songId: string
    likedAt?: Date | string | null
  }

  export type SongUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlistSongs?: PlaylistSongUpdateManyWithoutSongNestedInput
    favoriteSongs?: FavoriteSongUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUpdateManyWithoutSongNestedInput
    stats?: SongStatsUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playlistSongs?: PlaylistSongUncheckedUpdateManyWithoutSongNestedInput
    favoriteSongs?: FavoriteSongUncheckedUpdateManyWithoutSongNestedInput
    likedSongs?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
    stats?: SongStatsUncheckedUpdateOneWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ipfsHash?: StringFieldUpdateOperationsInput | string
    previewIpfsHash?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forSale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planType?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songCount?: NullableIntFieldUpdateOperationsInput | number | null
    songs?: PlaylistSongUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songCount?: NullableIntFieldUpdateOperationsInput | number | null
    songs?: PlaylistSongUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    songCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoriteSongUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    song?: SongUpdateOneRequiredWithoutFavoriteSongsNestedInput
  }

  export type FavoriteSongUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoriteSongUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikedSongUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    song?: SongUpdateOneRequiredWithoutLikedSongsNestedInput
  }

  export type LikedSongUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikedSongUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlaylistSongCreateManySongInput = {
    id?: string
    playlistId: string
    position?: number | null
  }

  export type FavoriteSongCreateManySongInput = {
    id?: string
    userId: string
    addedAt?: Date | string | null
  }

  export type LikedSongCreateManySongInput = {
    id?: string
    userId: string
    likedAt?: Date | string | null
  }

  export type PlaylistSongUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    playlist?: PlaylistUpdateOneRequiredWithoutSongsNestedInput
  }

  export type PlaylistSongUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaylistSongUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoriteSongUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutFavoriteSongsNestedInput
  }

  export type FavoriteSongUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoriteSongUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikedSongUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutLikedSongsNestedInput
  }

  export type LikedSongUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikedSongUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    likedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlaylistSongCreateManyPlaylistInput = {
    id?: string
    songId: string
    position?: number | null
  }

  export type PlaylistSongUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    song?: SongUpdateOneRequiredWithoutPlaylistSongsNestedInput
  }

  export type PlaylistSongUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaylistSongUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}