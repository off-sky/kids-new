import { reviews } from "../../types/reviews";
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ReviewService } from '../core/services/review.service';

@Injectable()
export class ReviewsResolver implements Resolve<reviews.Review[]> {

    constructor (
        private reviewService: ReviewService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<reviews.Review[]> {
        return this.reviewService.getReviews();
    }
}