import React from "react";
import { LazyMotion, domAnimation, m, } from "framer-motion";

function TravelSvg({ hover }) {
  return (
    <>
      {hover && (
       <LazyMotion features={domAnimation}>
          <m.svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
            <m.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 1,
              }}
              strokeWidth={8}
              strokeDasharray="0 1"
              stroke={"rgb(133,232,255)"}
              fill="none"
              d="M 126.5 134.996 Q 126.5 135 126.5 135.5 Q 126.5 136 126.5 136.5 Q 126.5 137 126.5 137.5 Q 126.5 138 126.5 138.5 Q 126.5 139 126.5 139.5 Q 126.5 140 126.5 141 Q 126.5 142 126.5 142.5 Q 126.5 143 126.5 143.5 Q 126.5 144 126.5 144.5 Q 126.5 145 126.5 145.5 Q 126.5 146 126.5 147 Q 126.5 148 126.5 149 Q 126.5 150 127 152 Q 127.5 154 127.5 155 Q 127.5 156 127.5 157 Q 127.5 158 128 159.5 Q 128.5 161 128.5 162 Q 128.5 163 129 163.5 Q 129.5 164 129.5 165 Q 129.5 166 130 167 Q 130.5 168 130.5 169 Q 130.5 170 130.5 171 Q 130.5 172 131 173 Q 131.5 174 133 175 Q 134.5 176 135 176.5 Q 135.5 177 136 177.5 Q 136.5 178 136.5 178.5 Q 136.5 179 137 179.5 Q 137.5 180 138 180 Q 138.5 180 140.5 181 Q 142.5 182 143.5 182.5 Q 144.5 183 145 183 Q 145.5 183 147 183.5 Q 148.5 184 149 184.5 Q 149.5 185 150 185 Q 150.5 185 151 185.5 Q 151.5 186 155 187 Q 158.5 188 160.5 188 Q 162.5 188 164 188 Q 165.5 188 166 188 Q 166.5 188 167 188 Q 167.5 188 168 188 Q 168.5 188 170 187.5 Q 171.5 187 172.5 187 Q 173.5 187 174.5 186.5 Q 175.5 186 176.5 185.5 Q 177.5 185 178.5 184.5 Q 179.5 184 180 184 Q 180.5 184 181 183.5 Q 181.5 183 182 183 Q 182.5 183 183.5 182 Q 184.5 181 185 181 Q 185.5 181 185.5 180.5 Q 185.5 180 186.5 180 Q 187.5 180 188 179.5 Q 188.5 179 188.5 178.5 Q 188.5 178 189 178 Q 189.5 178 190 177.5 Q 190.5 177 191 176.5 Q 191.5 176 192.5 175.5 Q 193.5 175 194.5 174.5 Q 195.5 174 196.5 173.5 Q 197.5 173 198.5 172.5 Q 199.5 172 200.5 171.5 Q 201.5 171 202 171 Q 202.5 171 203 170.5 Q 203.5 170 204 170 Q 204.5 170 205.5 170 Q 206.5 170 207 170 Q 207.5 170 208.5 170 Q 209.5 170 209.5 169.5 Q 209.5 169 210 169 Q 210.5 169 211 169 Q 211.5 169 211.5 169.5 Q 211.5 170 212 170 Q 212.5 170 213 170.5 Q 213.5 171 214 171.5 Q 214.5 172 214.5 172.5 Q 214.5 173 215 173.5 Q 215.5 174 215.5 174.5 Q 215.5 175 215.5 176 Q 215.5 177 216 177.5 Q 216.5 178 216.5 178.5 Q 216.5 179 216.5 179.5 Q 216.5 180 216.5 180.5 Q 216.5 181 216.5 182 Q 216.5 183 216.5 183.5 Q 216.5 184 216.5 184.5 Q 216.5 185 216.5 185.5 Q 216.5 186 216.5 186.5 Q 216.5 187 216.5 187.5 Q 216.5 188 216.5 188.5 Q 216.5 189 216.5 189.5 Q 216.5 190 216.5 190.5 Q 216.5 191 216.5 191.5 Q 216.5 192 216.5 192.5 Q 216.5 193 216 194 Q 215.5 195 215.5 195.5 Q 215.5 196 215.5 196.5 Q 215.5 197 215 197.5 Q 214.5 198 214.5 199 Q 214.5 200 214.5 200.5 Q 214.5 201 214 201.5 Q 213.5 202 212.5 204 Q 211.5 206 211.5 206.5 Q 211.5 207 211.5 207.5 Q 211.5 208 211.5 208.5 Q 211.5 209 211 209.5 Q 210.5 210 210.5 210.5 Q 210.5 211 210.5 211.5 Q 210.5 212 210.5 212.5 Q 210.5 213 210.5 214 Q 210.5 215 210.5 215.5 Q 210.5 216 210.5 217 Q 210.5 218 210.5 219 Q 210.5 220 210.5 220.5 Q 210.5 221 211 222 Q 211.5 223 212 224.5 Q 212.5 226 213.5 227 Q 214.5 228 215 229.5 Q 215.5 231 216 231.5 Q 216.5 232 216.5 232.5 Q 216.5 233 217 233.5 Q 217.5 234 218.5 234.5 Q 219.5 235 219.5 235.5 Q 219.5 236 220.5 236.5 Q 221.5 237 223.5 238 Q 225.5 239 226.5 239.5 Q 227.5 240 230.5 240.5 Q 233.5 241 236 241 Q 238.5 241 240 241 Q 241.5 241 244.5 241 Q 247.5 241 250 241 Q 252.5 241 254 241 Q 255.5 241 257.5 240 Q 259.5 239 261 239 Q 262.5 239 265 238 Q 267.5 237 269.5 236.5 Q 271.5 236 273 235.5 Q 274.5 235 277 234 Q 279.5 233 280 232.5 Q 280.5 232 282 231 Q 283.5 230 284 230 Q 284.5 230 285 229.5 Q 285.5 229 286 228 Q 286.5 227 287 226.5 Q 287.5 226 288 225.5 Q 288.5 225 290 223 Q 291.5 221 292 221 Q 292.5 221 293 219.5 Q 293.5 218 294 217.5 Q 294.5 217 295.5 215.5 Q 296.5 214 298 212 Q 299.5 210 300.5 209 Q 301.5 208 303 206 Q 304.5 204 304.5 203.5 Q 304.5 203 306.5 200.5 Q 308.5 198 309 197.5 Q 309.5 197 310 196 Q 310.5 195 311 194 Q 311.5 193 312 192 Q 312.5 191 313 190.5 Q 313.5 190 313.5 189.5 Q 313.5 189 314 188 Q 314.5 187 314.5 186.5 Q 314.5 186 314.5 185 Q 314.5 184 314.5 183.5 Q 314.5 183 315 182.5 Q 315.5 182 315.5 181.5 Q 315.5 181 316 180.5 Q 316.5 180 317 179 Q 317.5 178 317.5 177.5 Q 317.5 177 318 175.5 Q 318.5 174 319 173.5 Q 319.5 173 320.5 171.5 Q 321.5 170 322 169 Q 322.5 168 323 167.5 Q 323.5 167 324.5 166.5 Q 325.5 166 326 165.5 Q 326.5 165 327 164.5 Q 327.5 164 328 164 Q 328.5 164 329.5 163 Q 330.5 162 331.5 161.5 Q 332.5 161 334 161 Q 335.5 161 336 161 Q 336.5 161 337.5 160.5 Q 338.5 160 339 160 Q 339.5 160 340 160 Q 340.5 160 341 160 Q 341.5 160 342 160 Q 342.5 160 343 160 Q 343.5 160 344 160 Q 344.5 160 345 160.5 Q 345.5 161 346 161.5 Q 346.5 162 347 162 Q 347.5 162 347.5 162.5 Q 347.5 163 348 163.5 Q 348.5 164 348.5 164.5 Q 348.5 165 349 165.5 Q 349.5 166 349.5 166.5 Q 349.5 167 350 167.5 Q 350.5 168 350.5 168.5 Q 350.5 169 350.5 169.5 Q 350.5 170 350.5 171 Q 350.5 172 350.5 172.5 Q 350.5 173 351 174 Q 351.5 175 351.5 175.5 Q 351.5 176 351.5 176.5 Q 351.5 177 351.5 178 Q 351.5 179 351 180 Q 350.5 181 350.5 181.5 Q 350.5 182 350.5 182.5 Q 350.5 183 350 183.5 Q 349.5 184 349.5 184.5 Q 349.5 185 349.5 185.5 Q 349.5 186 349 186.5 Q 348.5 187 348 187 Q 347.5 187 347 188 Q 346.5 189 346 189 Q 345.5 189 345 189.5 Q 344.5 190 344 190.5 Q 343.5 191 343 191.5 Q 342.5 192 342 192 Q 341.5 192 341 192.5 Q 340.5 193 340 193 Q 339.5 193 339 193.5 Q 338.5 194 338.5 194.5 Q 338.5 195 338 195.5 Q 337.5 196 337 196 Q 336.5 196 336 196.5 Q 335.5 197 335 197.5 Q 334.5 198 334 198.5 Q 333.5 199 333 199.5 Q 332.5 200 332.5 200.5 Q 332.5 201 332 201 Q 331.5 201 331 202 Q 330.5 203 330 203.5 Q 329.5 204 329 205.5 Q 328.5 207 326 211 Q 323.5 215 323 216.5 Q 322.5 218 321.5 220 Q 320.5 222 319.5 224 Q 318.5 226 318.5 227.5 Q 318.5 229 318 230.5 Q 317.5 232 317 233.5 Q 316.5 235 316.5 236 Q 316.5 237 316.5 237.5 Q 316.5 238 316.5 238.5 Q 316.5 239 317 239.5 Q 317.5 240 318 240.5 Q 318.5 241 319 241.5 Q 319.5 242 320 242.5 Q 320.5 243 321.5 243.5 Q 322.5 244 324 244.5 Q 325.5 245 329 246 Q 332.5 247 333.5 247.5 Q 334.5 248 335.5 248 Q 336.5 248 337.5 248.5 Q 338.5 249 339 249 Q 339.5 249 340 249.5 Q 340.5 250 343 250 Q 345.5 250 346.5 250 Q 347.5 250 349 250 Q 350.5 250 351.5 250 Q 352.5 250 353 250 Q 353.5 250 354 250 Q 354.5 250 356 249 Q 357.5 248 358.5 248 Q 359.5 248 360 247.5 Q 360.5 247 361.5 246.5 Q 362.5 246 363 245.5 Q 363.5 245 363.5 244 Q 363.5 243 364 242 Q 364.5 241 365 239.5 Q 365.5 238 367 234.5 Q 368.5 231 369.5 229 Q 370.5 227 371.5 224 Q 372.5 221 374 219 Q 375.5 217 377 213.5 Q 378.5 210 379 208.5 Q 379.5 207 381.5 204 Q 383.5 201 385 198 Q 386.5 195 387.5 193 Q 388.5 191 389.5 188.5 Q 390.5 186 391 185.5 Q 391.5 185 393 182.5 Q 394.5 180 395.5 178.5 Q 396.5 177 397.5 176 Q 398.5 175 400 174 Q 401.5 173 402.5 171.5 Q 403.5 170 405 169 Q 406.5 168 407.5 168 Q 408.5 168 410.5 167 Q 412.5 166 415 164.5 Q 417.5 163 419 162.5 Q 420.5 162 423.5 161 Q 426.5 160 429.5 159.5 Q 432.5 159 433.5 158.5 Q 434.5 158 437 157.5 Q 439.5 157 440 157 Q 440.5 157 442.5 157 Q 444.5 157 445 157 Q 445.5 157 446.5 157 Q 447.5 157 448.5 157.5 Q 449.5 158 451.5 159 Q 453.5 160 455.5 161 Q 457.5 162 458.5 163 Q 459.5 164 460 164.5 Q 460.5 165 461 166 Q 461.5 167 461.5 168 Q 461.5 169 462 169.5 Q 462.5 170 463 172 Q 463.5 174 463.5 176.5 Q 463.5 179 464 182.5 Q 464.5 186 464.5 189.5 Q 464.5 193 463.5 198.5 Q 462.5 204 461.5 206.5 Q 460.5 209 460 210 Q 459.5 211 459 211.5 Q 458.5 212 458 212.5 Q 457.5 213 457 213.5 Q 456.5 214 456 214.5 Q 455.5 215 454.5 215 Q 453.5 215 452 215.5 Q 450.5 216 447 216.5 Q 443.5 217 441.5 218 Q 439.5 219 436 220 Q 432.5 221 431.5 221.5 Q 430.5 222 429.5 222 Q 428.5 222 426 223 Q 423.5 224 423 224.5 Q 422.5 225 421.5 225.5 Q 420.5 226 420 226.5 Q 419.5 227 418.5 227.5 Q 417.5 228 416.5 228.5 Q 415.5 229 414.5 229 Q 413.5 229 411.5 230.5 Q 409.5 232 408.5 232.5 Q 407.5 233 407.5 233.5 Q 407.5 234 407.5 234.5 Q 407.5 235 407 235.5 Q 406.5 236 406.5 236.5 Q 406.5 237 406.5 238 Q 406.5 239 406.5 239.5 Q 406.5 240 406.5 240.5 Q 406.5 241 406.5 242.5 Q 406.5 244 406 247.5 Q 405.5 251 404.5 254 Q 403.5 257 403 258 Q 402.5 259 401 261.5 Q 399.5 264 398.5 264.5 Q 397.5 265 396.5 266 Q 395.5 267 392 270 Q 388.5 273 386.5 273.5 Q 384.5 274 380 275.5 Q 375.5 277 372.5 277.5 Q 369.5 278 367.5 278 Q 365.5 278 364.5 278 Q 363.5 278 361.5 278 Q 359.5 278 356.5 277.5 Q 353.5 277 349.5 276.5 Q 345.5 276 344.5 276 Q 343.5 276 341 275 Q 338.5 274 337 274 Q 335.5 274 332 272.5 Q 328.5 271 327 271 Q 325.5 271 322.5 270.5 Q 319.5 270 319 269.5 Q 318.5 269 317 269 Q 315.5 269 312.5 269 Q 309.5 269 308.5 269 Q 307.5 269 306.5 269 Q 305.5 269 305 269 Q 304.5 269 304 269.5 Q 303.5 270 303 270 Q 302.5 270 302 270.5 Q 301.5 271 301 271.5 Q 300.5 272 300 273 Q 299.5 274 299.5 275 Q 299.5 276 299.5 276.5 Q 299.5 277 299.5 277.5 Q 299.5 278 300 278.5 Q 300.5 279 300.5 279.5 Q 300.5 280 301 280.5 Q 301.5 281 302 281.5 Q 302.5 282 303 282.5 Q 303.5 283 303.5 283.5 Q 303.5 284 305 285.5 Q 306.5 287 308 288.5 Q 309.5 290 312 292 Q 314.5 294 315 294 Q 315.5 294 315.5 294.5 Q 315.5 295 316 295 Q 316.5 295 316.5 295.5 Q 316.5 296 317 296 Q 317.5 296 321 297 Q 324.5 298 329 298 Q 333.5 298 337 298.5 Q 340.5 299 343 299 Q 345.5 299 347 299 Q 348.5 299 349.5 299.5 Q 350.5 300 353 300 Q 355.5 300 361.5 299.5 Q 367.5 299 371 299 Q 374.5 299 381.5 297.5 Q 388.5 296 392 295.5 Q 395.5 295 396.5 294.5 Q 397.5 294 398 294 Q 398.5 294 399 293.5 Q 399.5 293 400 293 Q 400.5 293 401.5 292.5 Q 402.5 292 405.5 291.5 Q 408.5 291 411 290.5 Q 413.5 290 415.5 289.5 Q 417.5 289 418.5 289 Q 419.5 289 420 289 Q 420.5 289 421 289 Q 421.5 289 422 289 Q 422.5 289 424.5 289.5 Q 426.5 290 429 290 Q 431.5 290 432.5 290.5 Q 433.5 291 437 291.5 Q 440.5 292 443.5 293.5 Q 446.5 295 450 296.5 Q 453.5 298 457 299.5 Q 460.5 301 464 302.5 Q 467.5 304 470.5 305 Q 473.5 306 476 306.5 Q 478.5 307 481 307 Q 483.5 307 484.5 306.5 Q 485.5 306 486.5 305.5 Q 487.5 305 488.5 304.5 Q 489.5 304 490 303.5 Q 490.5 303 492 301.5 Q 493.5 300 494 299.5 Q 494.5 299 496 297 Q 497.5 295 498 294 Q 498.5 293 500 290.5 Q 501.5 288 502 287 Q 502.5 286 503 284.5 Q 503.5 283 504 278.5 Q 504.5 274 504.5 271.5 Q 504.5 269 505.5 265 Q 506.5 261 508.5 254 Q 510.5 247 510.5 242.5 Q 510.5 238 510.5 233.5 Q 510.5 229 510.5 225 Q 510.5 221 509.5 217.5 Q 508.5 214 508 211 Q 507.5 208 507.5 206 Q 507.5 204 507.5 201.5 Q 507.5 199 507.5 198 Q 507.5 197 507.5 196.5 Q 507.5 196 507.5 195.5 Q 507.5 195 508 194.5 Q 508.5 194 509 193.5 Q 509.5 193 510 192.5 Q 510.5 192 513 191 Q 515.5 190 518.5 188.5 Q 521.5 187 524 185.5 Q 526.5 184 528 183.5 Q 529.5 183 530.5 181.5 Q 531.5 180 532 179.5 Q 532.5 179 533 178.5 Q 533.5 178 534 177.5 Q 534.5 177 536 176 Q 537.5 175 538 175 Q 538.5 175 539.5 174.5 Q 540.5 174 540.5 173.5 Q 540.5 173 541 172.5 Q 541.5 172 542 171.5 Q 542.5 171 543.5 170 Q 544.5 169 545 168.5 Q 545.5 168 546 168 Q 546.5 168 546.5 167.5 L 546.5 166.996"
            />
          </m.svg>
       </LazyMotion>
      )}
    </>
  );
}

export default TravelSvg;
